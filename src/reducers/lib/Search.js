import { fromJS } from 'immutable';

export function toggleSearch (state) {
  return state.setIn(['medicines', 'search', 'flag'], !state.getIn(['medicines', 'search', 'flag']));
  // .setIn(['explorer', 'search', 'text'], action.text)
  // .setIn(['explorer', 'search', 'flag'], (action.text.length > 0) ? true : false);
}

// export function saveSearchResult (state, action) {
//   return state
//   .setIn(['explorer', 'search', 'files'], fromJS(action.data.files))
//   .setIn(['explorer', 'search', 'folders'], fromJS(action.data.folders));
// }
//
// export function resetSearch (state) {
//   return state
//   .setIn(['explorer', 'search', 'flag'], false)
//   .setIn(['explorer', 'search', 'text'], '')
//   .setIn(['explorer', 'search', 'files'], fromJS([]))
//   .setIn(['explorer', 'search', 'folders'], fromJS([]));
// }
