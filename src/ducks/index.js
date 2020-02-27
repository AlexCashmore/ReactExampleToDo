import {combineReducers} from 'redux';
import cartReducer from "./shoppingCartReducer";
export const EZYVET_HARDWARE_PRODUCTS = [
    {
        "id":1,
        "title": "Sledgehammer",
        "price": 125.75,
        "inventory": 1000
    },
    {
        "id":2,
        "title": "Axe",
        "price": 190.50,
        "inventory": 1000
    },
    {
        "id":3,
        "title": "Bandsaw",
        "price": 562.13,
        "inventory": 1000
    },{
        "id":4,
        "title": "Chisel",
        "price": 12.9,
        "inventory": 1000
    },
    {
        "id":5,
        "title": "Hacksaw",
        "price": 18.45,
        "inventory": 1000
    }
];
function products(state=EZYVET_HARDWARE_PRODUCTS) {
    return state;
}
export default combineReducers({
    products,
    shoppingCart: cartReducer
});