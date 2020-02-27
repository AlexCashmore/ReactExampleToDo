import React,{Component} from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateCount} from '../ducks/shoppingCartReducer';
import { Card, Divider, Table,Row,Col,Panel } from 'react-materialize';

import CartItem from "./ShoppingCartItem";

export default class ShoppingCart extends Component {
    handleDelete(id) {
        this.props.deleteFromCart({id})
    }

    total(shoppingCart) {
        return shoppingCart.reduce((total, product) => {
            total += product.price * product.units;
            return total;
        }, 0);
    }

    render() {
        if (this.props.shoppingCart.length !== 0) {
            return (
                <div>

                    <Table hoverable>
                        <thead>
                        <tr>
                        <td style={{ width: '20%' }}>Item</td>
                        <td style={{ width: '10%' }}>Price ($NZD)</td>
                        <td >Remove</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.shoppingCart.map(cartItem => {
                            return (
                                    <CartItem key={cartItem.id}
                                              cartItem={cartItem}
                                              handleDelete={this.handleDelete.bind(this, cartItem.id)} />
                            );
                        })}
                        </tbody>


                    </Table>
                        <Divider/>

                        <b>Total: $ {parseFloat(Math.round(this.total(this.props.shoppingCart) * 100) / 100).toFixed(2)}</b>

                </div>
            );
        }

        return (
            <div></div>
        );
    }
}