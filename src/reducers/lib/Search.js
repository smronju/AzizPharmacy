export function toggleSearch (state) {
  return state
    .setIn(['medicines', 'search', 'flag'], !state.getIn(['medicines', 'search', 'flag']))
    .setIn(['medicines', 'search', 'text'], '');
}

export function setSearchText (state, action) {
  return state.setIn(['medicines', 'search', 'text'], action.text);
}

export function setSearchResult (state, action) {
  const regex = new RegExp(action.text, 'i');

  const inStock = state.getIn(['medicines', 'all'])
    .filter(medicine => medicine.get('status') == 1)
    .filter(medicine => medicine.get('name').search(regex) > -1);

  return state.setIn(['medicines', 'search', 'medicines'], inStock);
}
