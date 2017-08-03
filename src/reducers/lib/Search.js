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

export function setSearchResult (state, action) {
  // TODO: filter stocked medicine and show in search.
  // const list = state.getIn(['medicines', 'all']);
  return state
    .setIn(['medicines', 'search', 'medicines'], (list) => {
      return list.get('name') == action.text;
    });
}
