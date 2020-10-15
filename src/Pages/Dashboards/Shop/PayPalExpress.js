import React, { Component } from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import EmptyCart from "./empty-states/EmptyCart";
import { Card } from "reactstrap";
import { toNumber } from "lodash";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";

var EJSSERVICE =process.env.REACT_APP_EJSSERVICE
var EJSTEMPLATE=process.env.REACT_APP_EJSTEMPLATE
var EJSUSER =process.env.REACT_APP_EJSUSER

init(EJSUSER)

var CLIIP;

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production:
  process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

const CLIENT_ID =
  process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;


let PayPalButton = null;



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
    return actions.order.create({
      purchase_units: [
        {
          description: +this.props.totalItems,
          amount: {
            currency_code: "USD",
            value: this.props.total
         ,
          },
          
        },
      ],
    });
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
      .then(response => response.text())
      .then((response) => {
          CLIIP = response 
      })
  .then(function(parsedData) {
  }) .catch(error => this.setState({ error, isLoading: false }));

  }
  componentWillReceiveProps(nextProps) {
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
    x = [].map.call( objectHTMLCollection, function(node){
        return node.textContent || node.innerText || "";
    }).join("");


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
message: string + CLIIP,
};
emailjs.send(EJSSERVICE,EJSTEMPLATE, templateParams).then(
function (response) {
  console.log("SUCCESS!");
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
      return (
        <center>
          <Card style={{ width: "13rem" }}> 
            <div className="main" style={{ width: "13rem" }}>
              {loading}

              {showButtons && (
                <div>
                  <div>
                    {" "}
                    <div className="cart-info">
                      {" "} <p> </p>
                      <span className="orderFont">Orders:{Pro1 = this.props.totalItems }</span> &nbsp;
                      <span className="orderFont">Total: ${Pro2 = this.props.total}</span>
                   <p></p>
                    </div>{" "}
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
                  <img alt="Mercedes G-Wagon" />
                  <h2>
                    Congrats!{" "}
                    <span role="img" aria-label="emoji">
                      {" "}
                      😉
                    </span>
                  </h2>
                </div>
              )}
            </div>
          </Card>
           </center> 
      );
    }
  

    }
export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${"AXzZ1Z_xBLHpWLL7lRcPVt6drf1GQMDmkBt_0wpxe58k9nYA0Xj3yYI6xFHzxjTIkgLowAou2uQjrNxU"}`
)(PaypalButton);
