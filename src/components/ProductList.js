import React,{Component} from 'react';
import ProductItem from "./Item";
import { Card, Divider, Row, Table,Col,Panel,Button } from 'react-materialize';
import ShoppingCartContainer from "../containers/ShoppingCartContainer";

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderProducts() {
        return (
                    <Col key={'todo'}>
                        <ProductItem handleOnAdd={this.props.AddToCart.bind(this)} product={{id:this.props.shoppingCart.length+1,text:'',price:0,inventory:'',title:''}} />
                    </Col>
        );
    }
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Row>
                    <div style={{ display:'flex', justifyContent:'center'}}>
                    {this.renderProducts()}
                    </div>
                </Row>
                <Divider />
                <Row><ShoppingCartContainer /></Row>
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}
export default ProductsList;