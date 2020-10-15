import React, { Component } from "react";
class PayPalForwarder extends Component  {

        
        constructor(props) {
            super(props);
            this.state = {
                listDataFromChild: null
            };    

        let cartItems;
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
              >
                ×
              </a>
            </li>
          );
        });

}
        }

export default PayPalForwarder;
