import React, { Component } from "react";
import Counter from "./Counter";
import SizeCounter from "./SizeCounter";


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
      isAdded: false
    };
  }
  addToCart(image, name, price, id, quantity, size, style, stock) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
          size: size,
          style: style,
          stock: stock
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );

    

    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }

  quickView(image, name, price, id) {
    this.setState(
      {
        quickViewProduct: {
          image: image,
          name: name,
          price: price,
          id: id
        }
      },
      function() {
        this.props.openModal(this.state.quickViewProduct);
      }
    );
  }
  

  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    let size = [this.props.productSize];
    let style = this.props.productStyle;
    let stock = this.props.productStock;
    return (     <div  style={{ width: "13rem" }}> 
          <p>
     <center>
      
     <div className="product">
        <div className="product-image">    <img width="100%"
            src={image}
            alt={this.props.name}
            onClick={this.quickView.bind(
              this,
              image,
              name,
              price,
              id,
              quantity
            )}
          /></div>
        <h4 className="product-name">{this.props.name}</h4>
        <p className="product-price">{this.props.price}</p>
       
       Sizing:&nbsp;
               <b> 
    {[size]}
    </b>
        <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        /> <SizeCounter
        productSize={[size]}
        productStyle={style}
      />
  
      <small><p>
        In-Stock: {stock}</p></small> 
          <button
            className={!this.state.isAdded ? "" : "added"}
            type="button"
            onClick={this.addToCart.bind(
              this,
              image,
              name,
              price,
              id,
              quantity
            )}
          >
            {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
          </button>  </div>
          &nbsp; </center> </p> </div>
    );
  }
}

export default Product;
