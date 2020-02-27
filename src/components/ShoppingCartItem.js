
import React,{Component} from 'react';
import {Card, Divider, Table, Row, Col, Panel, Button, CardPanel} from 'react-materialize';

class CartItem extends Component {

    render() {
        const classes=['teal','red','pink','purple','blue','indigo','deep-purple','cyan','light-blue','light-green','lime','green','yellow','amber','orange','deep-orange'];
        const variation=['lighten-4','lighten-3','lighten-2','lighten-1','darken-1','darken-2'];
        const randomClass = Math.floor(Math.random() * 15);
        const randomVariation = Math.floor(Math.random() * 6);
        return (<div>
            <Card className={`${classes[randomClass]} ${variation[randomVariation]}`} actions={[
                <Button className="red lighten-2" onClick={() => this.props.handleDelete()}
                ><i className="material-icons">clear</i></Button>,<Button className="green lighten-2" onClick={() => this.props.handleDelete()}
            ><i className="material-icons">check</i></Button>]}>
            <span className="white-text">
                {this.props.cartItem.id}: {this.props.cartItem.text} <br /><b>{this.props.cartItem.time}</b>
            </span>
            </Card>
            </div>

        );
    }
}

export default CartItem;