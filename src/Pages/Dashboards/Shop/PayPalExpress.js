import React, { Component } from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import scriptLoader from "react-async-script-loader";
import { Card, CardHeader, CardImg } from "reactstrap";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import { DESTRUCTION } from "dns";

var EJSSERVICE = process.env.REACT_APP_EJSSERVICE;
var EJSTEMPLATE = process.env.REACT_APP_EJSTEMPLATE;
var EJSUSER = process.env.REACT_APP_EJSUSER;
var REACT_APP_PPID = process.env.REACT_APP_PPID;
init(EJSUSER);

var CLIIP;

let PayPalButton;

class PaypalButton extends Component {
  constructor(props) {
    super(props);
    this.updateCostClick = this.updateCostClick.bind(this);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false,
      showButtons: false,
      loading: true,
      paid: false,
    };
    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  createOrder = (data, actions) => {
    if (this.props.total <= 0) {
      setTimeout(function () {
        alert("Your Cart Is Empty");
      }, 250);
    } else {
      return actions.order.create({
        purchase_units: [
          {
            description: +this.props.totalItems,
            amount: {
              currency_code: "USD",
              value: this.props.total,
            },
          },
        ],
      });
    }
  };
  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart,
    });
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => {
        CLIIP = response;
      })
      .then(function (parsedData) {})
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentWillUnmount() {
    DESTRUCTION;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM,
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }

  updateCostClick() {
    var objectHTMLCollection = document.getElementsByClassName("product-price"),
      x = [].map
        .call(objectHTMLCollection, function (node) {
          return node.textContent || node.innerText || "";
        })
        .join("");

    var x = document.getElementsByTagName("product-price");
    var l = x.length;
    for (var i = 0; i < l; i++) {
      document.write(x[i].tagName + "<br>");
    }

    var objectHTMLCollection = document.getElementsByClassName("cart-item"),
      string = [].map
        .call(objectHTMLCollection, function (node) {
          return node.textContent || node.innerText || "";
        })
        .join("");

    var x = document.getElementsByTagName("product-info");
    var l = x.length;
    for (var i = 0; i < l; i++) {
      document.write(x[i].tagName + "<br>");
    }

    var templateParams = {
      name: "Jason Hoku Levien",
      message: string,
      message2: CLIIP,
    };
    emailjs.send(EJSSERVICE, EJSTEMPLATE, templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
  onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID,
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
    });
  };

  render() {
    var Pro1 = null;
    var Pro2 = null;
    const { showButtons, loading, paid } = this.state;
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
          <div id="smart-button-container">
            <div style="text-align: center;">
              <div id="paypal-button-container"></div>
            </div>
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
    if (window.location.hash === "/dashboards/account") {
      return (
        <center>
          <Card style={{ width: "13rem" }}>
            <p> </p>
            <strong>{(Pro1 = this.props.totalItems)}</strong> &nbsp;
            <strong> Total: ${(Pro2 = this.props.total)}</strong>
            <p></p>
            {this.state.cart.map((product) => {
              if (window.location.hash === "/dashboards/account") {
                return null;
              } else {
                return (
                  <div style={{ boxShadow: "0px 0px 0px 5px" }} width="100%">
                    <br />
                    <button
                      style={{ float: "right" }}
                      onClick={this.props.removeProduct.bind(this, product.id)}
                    >
                      Remove
                    </button>{" "}
                    <br />
                    <br />
                    <div>{product.name}</div> <br />
                    <img
                      width="75px"
                      className="product-image"
                      src={product.image}
                    />
                    <br />
                    <br />
                  </div>
                );
              }
            })}
            <br />
            <div className="main" style={{ width: "13rem" }}>
              {loading}

              {showButtons && (
                <div>
                  <div>
                    {" "}
                    <div className="cart-info"> </div>{" "}
                  </div>

                  <PayPalButton
                    onClick={this.updateCostClick.bind(this)}
                    createOrder={(data, actions) =>
                      this.createOrder(data, actions)
                    }
                    onApprove={(data, actions) => this.onApprove(data, actions)}
                  />
                </div>
              )}

              {paid && (
                <div className="main">
                  <h2>
                    Your Order Has Been Received!{" "}
                    <span role="img" aria-label="emoji"></span>
                  </h2>
                </div>
              )}
            </div>
          </Card>
        </center>
      );
    } else {
      return (
        <center>
          <Card style={{ width: "13rem" }}>
            <p> </p>
            <strong>Orders:{(Pro1 = this.props.totalItems)}</strong> &nbsp;
            <strong> Total: ${(Pro2 = this.props.total)}</strong>
            <p></p>
            {this.state.cart.map((product) => {
              if (window.location.hash === "/dashboards/account") {
                return null;
              } else {
                return (
                  <div style={{ boxShadow: "0px 0px 0px 5px" }} width="100%">
                    <br />
                    <button
                      style={{ float: "right" }}
                      onClick={this.props.removeProduct.bind(this, product.id)}
                    >
                      Remove
                    </button>{" "}
                    <br />
                    <br />
                    <div>{product.name}</div> <br />
                    <img
                      width="75px"
                      className="product-image"
                      src={product.image}
                    />
                    <br />
                    <br />
                  </div>
                );
              }
            })}
            <br />
            <div className="main" style={{ width: "13rem" }}>
              {loading}

              {showButtons && (
                <div>
                  <div>
                    {" "}
                    <div className="cart-info"> </div>{" "}
                  </div>

                  <PayPalButton
                    onClick={this.updateCostClick.bind(this)}
                    createOrder={(data, actions) =>
                      this.createOrder(data, actions)
                    }
                    onApprove={(data, actions) => this.onApprove(data, actions)}
                  />
                </div>
              )}

              {paid && (
                <div className="main">
                  <h2>
                    Your Order Has Been Received!{" "}
                    <span role="img" aria-label="emoji"></span>
                  </h2>
                </div>
              )}
            </div>
          </Card>
        </center>
      );
    }
  }
}
export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${REACT_APP_PPID}`
)(PaypalButton);
