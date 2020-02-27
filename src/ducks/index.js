import {combineReducers} from 'redux';
import cartReducer from "./shoppingCartReducer";
export const TODO = [
    {
        "id":1,
        "title": "Sledgehammer",
        "text":"",
        "price": 125.75,
        "inventory": 1000
    },
];
function products(state=TODO) {
    return state;
}
export default combineReducers({
    products,
    shoppingCart: cartReducer
});