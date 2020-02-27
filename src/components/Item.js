import React,{Component} from 'react';
import { Card, Divider, Table,Row,Col,Panel,Button } from 'react-materialize';

class ProductItem extends Component {

    render() {
        return (
            <div>
                    <Col>
                        <div style={{backgroundColor:'grey'}}>
                            <div style={{padding:20}}>
                        <b>{this.props.product.title}</b>
                        <p>${this.props.product.price}</p>
                        <Button waves="light" className="orange darken-2" onClick={() => this.props.handleOnAdd(this.props.product)}>Add to Cart</Button>
                            </div>
                        </div>
                    </Col>

            </div>
        );
    }
}

export default ProductItem;