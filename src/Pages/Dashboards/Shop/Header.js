import React, { Component } from "react";
import CartScrollBar from "./CartScrollBar";
import Counter from "./Counter";
import EmptyCart from "./empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";
import "./Product";
import CheckoutHelper from "./Checkout";
import ShopPage from ".";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

var EJSSERVICE =process.env.REACT_APP_EJSSERVICE
var EJSTEMPLATE=process.env.REACT_APP_EJSTEMPLATE
var EJSUSER =process.env.REACT_APP_EJSUSER

init(EJSUSER)

var CLIIP;

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false,
    };
  }




  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleMobileSearch(e) {
    e.preventDefault();
    this.setState({
      mobileSearch: true,
    });
  }
  handleSearchNav(e) {
    e.preventDefault();
    this.setState(
      {
        mobileSearch: false,
      },
      function () {
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
      }
    );
  }

  render() {
    let cartItems;
    cartItems = this.state.cart.map((product) => {
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >
            ×
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="ul"
          className="cart-items"
        >
          {cartItems}
        </CSSTransitionGroup>
      );
    }
    return (

          <div className="cart">
            <div className="cart-info">
              <table>
                <tbody>
                  <tr>
                    <td>No. of Orders</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.totalItems}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>:</td>
                    <td>
                      <strong>${this.props.total}</strong>  
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              className="cart-icon"
              href="#"
              onClick={this.handleCart.bind(this)}
              ref="cartButton"
            >
              <img
                className={this.props.cartBounce ? "tada" : " "}
                src="./images/cart.png"
                alt="Cart"
              />
              {this.props.totalItems ? (
                <span className="cart-count">{this.props.totalItems}</span>
              ) : (
                ""
              )}
            </a>
            <div
              className={
                this.state.showCart ? "cart-preview active" : "cart-preview"
              }
              ref="cartPreview"
            >
              <CartScrollBar>{view}</CartScrollBar>
              <div className="action-block" >
                <form action="#">
                  <button onClick={this.handleClick.bind(this)} type="button">
                 <strong  style={{ color: "black" }}> CHECKOUT </strong><small> powered by </small><img src="./images/paylogo.svg" width="20"></img> <img src="./images/paypal.svg" width="80"></img>   </button>
                </form>
              </div>
            </div>
          </div>
    );
  }

  handleClick() {

    window.scrollTo(0,document.body.scrollHeight);
  }
}
/*   let cartItems;
    cartItems = this.state.cart.map(product => {
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >*/

export default Header;
