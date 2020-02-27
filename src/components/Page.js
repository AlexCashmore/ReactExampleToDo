/**
 * Created by cashm on 8/11/2018.
 */
import React,{Component} from 'react';
import ProductsListContainer from '../containers/ProductListContainer';
import {Navbar, NavItem} from "react-materialize";


export default class Page extends Component {
    render() {
        return(<div className="grey">
            <Navbar className="grey" brand="Alex's To Do list" right>
            </Navbar>
            <ProductsListContainer/></div>)
    }
}