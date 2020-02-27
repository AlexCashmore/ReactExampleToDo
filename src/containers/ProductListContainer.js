/**
 * Created by cashm on 8/11/2018.
 */
import { connect } from 'react-redux';
import {addToCart} from "../ducks/shoppingCartReducer";
import ProductList from "../components/ProductList";

function mapStateToProps(state) {
    return {
        products: state.products,
        shoppingCart:state.shoppingCart
    }
}
const mapDispatchToProps = (dispatch) => ({
    AddToCart: (id,text,time) => {
        dispatch(addToCart(id,text,time))
    }
});

function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);