/* ==========================================
|       ▀▄▀▄▀▄ ѕмяσиנυ ωαѕ нєяє ▄▀▄▀▄▀      |
* ========================================== */

import * as type from '../constants/ActionTypes';

export function testAction (data) {
  return { type: type.TEST_ACTION, data };
}

export function toggleSearch (data) {
  return { type: type.TOGGLE_SEARCH, data };
}

export function setSearchText (text) {
  return { type: type.SET_SEARCH_TEXT, text};
}

export function toggleModal () {
  return { type: type.TOGGLE_MODAL };
}

export function setModalContent (data) {
  return { type: type.SET_MODAL_CONTENT, data };
}
