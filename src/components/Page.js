/**
 * Created by cashm on 8/11/2018.
 */
import React,{Component} from 'react';
import ProductsListContainer from '../containers/ProductListContainer';
import {Navbar, NavItem} from "react-materialize";


export default class Page extends Component {
    render() {
        return(<div>
            <Navbar className="grey" brand="Alex's Hardware Store" right>
                <NavItem>Products</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact Us</NavItem>
            </Navbar>
            <ProductsListContainer/></div>)
    }
}