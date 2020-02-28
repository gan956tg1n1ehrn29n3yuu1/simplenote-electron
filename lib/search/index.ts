import SearchWorker from 'worker-loader!./worker';

import actions from '../state/actions';

import * as A from '../state/action-types';
import * as S from '../state';
import { search } from '../state/ui/actions';

export const middleware: S.Middleware = store => {
  const searchWorker = new SearchWorker();
  const {
    port1: searchProcessor,
    port2: _searchProcessor,
  } = new MessageChannel();

  searchProcessor.onmessage = event => {
    switch (event.data.action) {
      case 'filterNotes':
        store.dispatch(
          actions.ui.filterNotes(
            store
              .getState()
              .appState.notes?.filter(({ id }) => event.data.noteIds.has(id)) ||
              []
          )
        );
        break;
    }
  };

  searchWorker.postMessage('boot', [_searchProcessor]);

  return next => (action: A.ActionType) => {
    const result = next(action);

    switch (action.type) {
      case 'APPLY_REMOTE_UPDATE':
        searchProcessor.postMessage({
          action: 'updateNote',
          noteId: action.noteId,
          data: action.data,
        });
        break;

      case 'App.selectTag':
        searchProcessor.postMessage({
          action: 'filterNotes',
          openedTag: action.tag.data.name,
        });
        break;

      case 'App.selectTrash':
        searchProcessor.postMessage({
          action: 'filterNotes',
          openedTag: null,
          showTrash: true,
        });
        break;

      case 'App.showAllNotes':
        searchProcessor.postMessage({
          action: 'filterNotes',
          openedTag: null,
          showTrash: false,
        });
        break;

      case 'SEARCH':
        searchProcessor.postMessage({
          action: 'filterNotes',
          searchQuery: action.searchQuery,
        });
        break;

      case 'DELETE_NOTE_FOREVER':
      case 'RESTORE_NOTE':
      case 'TRASH_NOTE':
      case 'App.authChanged':
      case 'App.notesLoaded':
      case 'App.tagsLoaded':
      case 'App.trashNote':
        searchProcessor.postMessage({ action: 'filterNotes' });
        break;
    }

    return result;
  };
};
