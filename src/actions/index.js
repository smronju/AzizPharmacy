/* ==========================================
|       ▀▄▀▄▀▄ ѕмяσиנυ ωαѕ нєяє ▄▀▄▀▄▀      |
* ==========================================*/

import * as type from '../constants/ActionTypes';

export function testAction (data) {
  return { type: type.TEST_ACTION, data };
}

export function toggleSearch (data) {
  return { type: type.TOGGLE_SEARCH, data };
}
