import { escapeRegExp } from 'lodash';
import { getTerms } from '../../utils/filter-notes';

import * as T from '../../types';

const notes: Map<T.EntityId, [T.EntityId, T.Note]> = new Map();

self.onmessage = bootEvent => {
  const mainApp: MessagePort | undefined = bootEvent.ports[0];

  if (!mainApp) {
    // bail if we don't get a custom port
    return;
  }

  let searchQuery = '';
  let openedTag: string | null = null;
  let showTrash = false;

  const updateFilter = (scope = 'quickSearch') => {
    const tic = performance.now();
    const terms = getTerms(searchQuery).map(
      term => new RegExp(escapeRegExp(term), 'i')
    );
    const matches = new Set<T.EntityId>();

    const filterTags = openedTag ? [openedTag] : [];
    const tagPattern = /(?:\btag:)([^\s,]+)/g;
    let match;
    while ((match = tagPattern.exec(searchQuery)) !== null) {
      filterTags.push(match[1].toLocaleLowerCase());
    }

    for (const [noteId, note] of notes.values()) {
      // return a small set of the results quickly and then
      // queue up another search. this improves the responsiveness
      // of the search and it gives us another opportunity to
      // receive inbound messages from the main thread
      // in testing this was rare and may only happen in unexpected
      // circumstances such as when performing a garbage-collection
      const toc = performance.now();
      if (scope === 'quickSearch' && toc - tic > 10) {
        mainApp.postMessage({ action: 'filterNotes', noteIds: matches });
        queueUpdateFilter('fullSearch');
        return;
      }

      if (showTrash !== note.deleted) {
        continue;
      }

      const noteTags = new Set(note.tags);
      if (!filterTags.every(tag => noteTags.has(tag))) {
        continue;
      }

      if (
        searchQuery.length > 0 &&
        !terms.every(term => term.test(note.content))
      ) {
        continue;
      }

      matches.add(noteId);
    }

    mainApp.postMessage({ action: 'filterNotes', noteIds: matches });
  };

  let updateHandle: ReturnType<typeof setTimeout> | null = null;
  const queueUpdateFilter = (searchScope = 'quickSearch') => {
    if (updateHandle) {
      clearTimeout(updateHandle);
    }

    updateHandle = setTimeout(() => {
      updateHandle = null;
      updateFilter(searchScope);
    }, 0);
  };

  mainApp.onmessage = event => {
    if (event.data.action === 'updateNote') {
      const { noteId, data } = event.data;

      notes.set(noteId, [
        noteId,
        { ...data, tags: data.tags.map(tag => tag.toLocaleLowerCase()) },
      ]);

      queueUpdateFilter();
    } else if (event.data.action === 'filterNotes') {
      if ('string' === typeof event.data.searchQuery) {
        searchQuery = event.data.searchQuery.trim();
      }

      if ('string' === typeof event.data.openedTag) {
        openedTag = event.data.openedTag.toLocaleLowerCase();
      } else if (null === event.data.openedTag) {
        openedTag = null;
      }

      if ('boolean' === typeof event.data.showTrash) {
        showTrash = event.data.showTrash;
      }

      queueUpdateFilter();
    }
  };
};
