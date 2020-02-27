export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart({id, title, price, units=1}) {
    return {
        type: ADD_TO_CART,
        payload: {id, title, price, units}
    }
}
export function deleteFromCart({id}) {
    return {
        type: REMOVE_FROM_CART,
        payload: {id}
    }
}

function indexHelper(products, id) {
    return products.findIndex((product) => product.id === id)
}

export default function shoppingCartReducer(state=[], action={}) {
    switch(action.type) {
        case ADD_TO_CART:
            let addIndex = indexHelper(state, action.payload.id);
            if (addIndex !== -1) {
                state[addIndex].units += 1;
                return state.concat([]);
            }
            return state.concat(action.payload);
        case REMOVE_FROM_CART:
            let Indx = indexHelper(state, action.payload.id);
            return [...state.slice(0, Indx), ...state.slice(Indx+1)];
    }
    return state;
}