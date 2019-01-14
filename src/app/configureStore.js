// configureStore.js

import {createStore,
    combineReducers} from 'redux';

import cartReducer from './product/state/cartReducer';

export default function configureStore() {
    const rootReducer = combineReducers({
        items: cartReducer
    })

    const store = createStore(rootReducer)

    return store;
}