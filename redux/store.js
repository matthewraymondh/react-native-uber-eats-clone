import { createStore } from 'redux'

import reducer from './reducers/index';

export default function comfigureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
}