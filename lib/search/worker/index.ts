import { escapeRegExp } from 'lodash';
import { getTerms } from '../../utils/filter-notes';

import * as T from '../../types';

const notes: Map<T.EntityId, T.NoteEntity> = new Map();

self.onmessage = bootEvent => {
  const mainApp: MessagePort | undefined = bootEvent.ports[0];

  if (!mainApp) {
    // bail if we don't get a custom port
    return;
  }

  let searchQuery = '';
  let openedTag: string | null = null;
  let showTrash = false;

  const updateFilter = () => {
    const terms = getTerms(searchQuery).map(
      term => new RegExp(escapeRegExp(term), 'i')
    );
    const matches = new Set<T.EntityId>();

    const filterTags = [];
    let match;
    const tagPattern = /(?:\btag:)([^\s,]+)/g;
    while ((match = tagPattern.exec(searchQuery)) !== null) {
      filterTags.push(match[1].toLocaleLowerCase());
    }
    if (openedTag) {
      filterTags.push(openedTag);
    }

    for (const note of notes.values()) {
      if (showTrash !== note.data.deleted) {
        continue;
      }

      const noteTags = new Set(note.data.tags);
      if (!filterTags.every(tag => noteTags.has(tag))) {
        continue;
      }

      if (
        searchQuery.length > 0 &&
        !terms.every(term => term.test(note.data.content))
      ) {
        continue;
      }

      matches.add(note.id);
    }

    mainApp.postMessage({ action: 'filterNotes', noteIds: matches });
  };

  let updateHandle;
  const queueUpdateFilter = () => {
    if (updateHandle) {
      clearTimeout(updateHandle);
    }

    updateHandle = setTimeout(() => {
      updateHandle = null;
      updateFilter();
    }, 10);
  };

  mainApp.onmessage = event => {
    if (event.data.action === 'updateNote') {
      notes.set(event.data.noteId, {
        id: event.data.noteId,
        data: {
          ...event.data.data,
          tags: event.data.data.tags.map(tag => tag.toLocaleLowerCase()),
        },
      });
      queueUpdateFilter();
    } else if (event.data.action === 'filterNotes') {
      searchQuery = event.data.searchQuery.trim();
      openedTag =
        'string' === typeof event.data.openedTag
          ? event.data.openedTag.toLocaleLowerCase()
          : event.data.openedTag;
      showTrash = event.data.showTrash;
      queueUpdateFilter();
    }
  };
};
