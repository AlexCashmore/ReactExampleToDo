import React,{Component} from 'react';
import { Card, Divider, Table,Row,Col,Panel,Button } from 'react-materialize';

class ProductItem extends Component {
    componentWillMount(){
        this.setState({text:''})
    }

    get handleToDoInput(){
        return (e)=>{
            this.setState({text:e.target.value})
        }
    }
    get handleToDoInput2(){
        return (e)=>{
            this.setState({time:e.target.value})
        }
    }
    clearToDoInput(){
            this.setState({
                text:'',
                time:'',
            })
    }


    render() {
        return (
            <div>
                    <Col>
                        <div style={{backgroundColor:'grey'}}>
                            <div style={{padding:20}}>
                        <b>New To Do item:</b>
                                <div><input onChange={this.handleToDoInput} /></div>
                        <p>When?</p>
                                <div><input onChange={this.handleToDoInput2} /></div>

                                <Button waves="light" className="orange darken-2" onClick={() => {this.props.handleOnAdd(this.props.product,this.state.text,this.state.time)}}>Add To Do</Button>
                            </div>
                        </div>
                    </Col>

            </div>
        );
    }
}

export default ProductItem;