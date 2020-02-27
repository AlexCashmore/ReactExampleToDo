
import React,{Component} from 'react';
import {Card, Divider, Table, Row, Col, Panel, Button, CardPanel} from 'react-materialize';

class CartItem extends Component {

    render() {
        return (
            <tr>
                            <td style={{width:'10%'}}>{this.props.cartItem.title} ({this.props.cartItem.units})</td>
                                <td>{this.props.cartItem.price}</td>
                                <td><Button className="red lighten-2" onClick={() => this.props.handleDelete()}
                                >x</Button></td>
            </tr>
        );
    }
}

export default CartItem;