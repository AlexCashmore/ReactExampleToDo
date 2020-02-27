import {createStore} from 'redux';
import reducers from '../../src/ducks/index.js'
import {
    ADD_TO_CART, UPDATE_ITEM_UNITS, DELETE_FROM_CART, addToCart,
    REMOVE_FROM_CART, deleteFromCart
} from '../../src/ducks/shoppingCartReducer';

import EZYVET_HARDWARE_PRODUCTS from '../../src/ducks/index.js';

describe('Shopping Cart Actions Test', () => {
    it('should create an action to ADD an item to the shoppingCart', () => {
        const expectedAction = {
            type: ADD_TO_CART,
            payload:{id:1,
                title: "Sledgehammer",
                price: 125.75,units:1}
        };
        expect(addToCart({id:1,
            title: "Sledgehammer",
            price: 125.75,units:1})).toEqual(expectedAction)
    });
    it('should create an action to REMOVE an item from the shoppingCart', () => {
        const expectedAction = {
            type: REMOVE_FROM_CART,
            payload:{id:1}
        };
        expect(deleteFromCart({id:1})).toEqual(expectedAction)
    })
});

describe('Shopping Cart Reducer Test' , () => {
    it('adds an item to the shoppingCart', () => {
        let store = createStore(reducers, {shoppingCart: [], products: EZYVET_HARDWARE_PRODUCTS});
        let action = {
            type: ADD_TO_CART,
            payload: {id:1,
                title: "Sledgehammer",
                price: 125.75,units:1}
        };

        store.dispatch(action);
        let state = store.getState().shoppingCart;
        let expected =
            [{id:1,
                title: "Sledgehammer",
                price: 125.75,units:1}];

        expect(state).toEqual(expected);
    });
    it('adds an item to the shoppingCart, then another item of same type. should increase unit count', () => {
        let store = createStore(reducers, {shoppingCart: [], products: EZYVET_HARDWARE_PRODUCTS});
        let action = {
            type: ADD_TO_CART,
            payload: {id:1,
                title: "Sledgehammer",
                price: 125.75,units:1}
        };

        store.dispatch(action);
        store.dispatch(action);
        let state = store.getState().shoppingCart;

        let expected =
            [{id:1,
                title: "Sledgehammer",
                price: 125.75,units:2}];

        expect(state).toEqual(expected);
    });
    it('adds an item to the shoppingCart, then another item of same type. then removes all', () => {
        let store = createStore(reducers, {shoppingCart: [], products: EZYVET_HARDWARE_PRODUCTS});
        let action = {
            type: ADD_TO_CART,
            payload: {id:1,
                title: "Sledgehammer",
                price: 125.75,units:1}
        };
        let removeAction = {
            type: REMOVE_FROM_CART,
            payload: {id:1,}
        };

        store.dispatch(action);
        store.dispatch(action);
        store.dispatch(removeAction);
        let state = store.getState().shoppingCart;

        let expected =
            [];
        expect(state).toEqual(expected);
    });
});