// import { fromJS } from 'immutable';

export function toggleSearch (state) {
  return state
    .setIn(['medicines', 'search', 'flag'], !state.getIn(['medicines', 'search', 'flag']))
    .setIn(['medicines', 'search', 'text'], '');
}

export function setSearchText (state, action) {
  return state
    .setIn(['medicines', 'search', 'text'], action.text);
}

export function setSearchResult (state) {
  // TODO: filter stocked medicine and show in search.
  return state;
}
