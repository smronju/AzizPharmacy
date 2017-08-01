import { fromJS } from 'immutable';

export function toggleSearch (state) {
  return state
    .setIn(['medicines', 'search', 'flag'], !state.getIn(['medicines', 'search', 'flag']))
    .setIn(['medicines', 'search', 'text'], '');
}

export function setSearchText (state, action) {
  return state
    .setIn(['medicines', 'search', 'text'], action.text);
}

export function resetSearch (state) {
  return state
    .setIn(['medicines', 'search', 'flag'], false)
    .setIn(['medicines', 'search', 'medicines'], fromJS([]));
}
