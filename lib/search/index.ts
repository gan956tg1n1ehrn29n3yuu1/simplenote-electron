import SearchWorker from 'worker-loader!./worker';

import actions from '../state/actions';

import * as A from '../state/action-types';
import * as S from '../state';

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
    const prevState = store.getState();
    const result = next(action);

    switch (action.type) {
      case 'APPLY_REMOTE_UPDATE':
        searchProcessor.postMessage({
          action: 'updateNote',
          noteId: action.noteId,
          data: action.data,
        });
        break;
      case 'DELETE_NOTE_FOREVER':
      case 'RESTORE_NOTE':
      case 'TRASH_NOTE':
      case 'App.authChanged':
      case 'App.notesLoaded':
      case 'App.selectTag':
      case 'App.selectTrash':
      case 'App.showAllNotes':
      case 'App.tagsLoaded':
      case 'App.trashNote':
      case 'SEARCH':
        searchProcessor.postMessage({
          action: 'filterNotes',
          openedTag:
            'App.selectTrash' === action.type
              ? null
              : 'App.selectTag' === action.type
              ? action.tag.data.name
              : prevState.appState.tag?.data.name,
          searchQuery: action.hasOwnProperty('searchQuery')
            ? action.searchQuery
            : prevState.ui.searchQuery,
          showTrash:
            'App.selectTrash' === action.type ? true : prevState.ui.showTrash,
        });
        break;
    }

    return result;
  };
};
