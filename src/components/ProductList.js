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
            this.props.products.map((product) => {
                return (
                    <Col key={product.id}>
                        <ProductItem handleOnAdd={this.props.AddToCart.bind(this)} product={product} />
                    </Col>
                );
            })
        );
    }

    render() {
        console.log(this.props);
        return (
            <div style={{marginLeft:20}}>

                <Row style={{margin:'15px'}}>
                    <div style={{ display:'flex', justifyContent:'center'}}>
                    {this.renderProducts()}
                    </div>
                </Row>
                <Divider />
                <Row><ShoppingCartContainer /></Row>
            </div>
        );
    }
}
export default ProductsList;