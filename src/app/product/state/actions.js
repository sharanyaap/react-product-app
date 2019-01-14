// actions.js
// action creators, create action object
import * as ActionTypes from './action-types';

// create action and return the action
export const addItem = (item) => ( {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
        item
    }
});


export const removeItem = (id) => {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id
        }
    }
}


export const updateItem = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id,
            qty: parseInt(qty)
        }
    }
}

export const empty = () => {
    return {
        type: ActionTypes.EMPTY_CART
    }
}