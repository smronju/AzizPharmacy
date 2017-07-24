/* ==========================================
|       ▀▄▀▄▀▄ ѕмяσиנυ ωαѕ нєяє ▄▀▄▀▄▀      |
* ==========================================*/

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from '../reducers';
import Thunk from 'redux-thunk';

const middleware = [Thunk];

export default createStore(Reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));
