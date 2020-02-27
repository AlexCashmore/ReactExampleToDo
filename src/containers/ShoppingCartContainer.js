import {deleteFromCart} from "../ducks/shoppingCartReducer";
import {bindActionCreators} from "redux";
import ShoppingCart from "../components/ShoppingCart";
import {connect} from "react-redux";
function mapStateToProps(state) {
    return {
        shoppingCart: state.shoppingCart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ShoppingCart);