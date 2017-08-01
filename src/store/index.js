/* ==========================================
|       ▀▄▀▄▀▄ ѕмяσиנυ ωαѕ нєяє ▄▀▄▀▄▀      |
* ========================================== */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import Reducers from '../reducers';

const middleware = [Thunk];

export default createStore(Reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
