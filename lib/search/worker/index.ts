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
    const matches = new Set<T.EntityId>();
    for (const note of notes.values()) {
      if (showTrash !== note.data.deleted) {
        continue;
      }

      if (openedTag && !note.data.tags.includes(openedTag)) {
        continue;
      }

      if (searchQuery.length > 0 && !note.data.content.includes(searchQuery)) {
        continue;
      }

      matches.add(note.id);
    }

    mainApp.postMessage({ action: 'filterNotes', noteIds: matches });
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
      updateFilter();
    } else if (event.data.action === 'filterNotes') {
      searchQuery = event.data.searchQuery.trim();
      openedTag =
        'string' === typeof event.data.openedTag
          ? event.data.openedTag.toLocaleLowerCase()
          : event.data.openedTag;
      showTrash = event.data.showTrash;
      updateFilter();
    }
  };
};
