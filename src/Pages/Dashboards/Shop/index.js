import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import QuickView from "./QuickView";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import PayPalButton from "./PayPalExpress";
import Popup from "react-popup";
import emailNotify from "./Emailer";
import PayPalForwarder from "./PayPalForwarder";
import CheckoutHelper from "./Checkout";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  NavLink,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import Product from "./Product";
import PayPalExpress from "./PayPalExpress";

// Examples

//

export default class ShopPage extends Component {
  zTest = 0;

  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    let url = "./products.json";
    axios.get(url).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex((x) => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    setTimeout(
      function () {
        this.setState({
          cartBounce: false,
          quantity: 1,
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total,
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total,
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty,
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true,
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false,
    });
  }

  render() {
    document.getElementById("popupContainer");
    return (
      <Fragment>
        <div>
          <Header
            cartBounce={this.state.cartBounce}
            total={this.state.totalAmount}
            totalItems={this.state.totalItems}
            cartItems={this.state.cart}
            removeProduct={this.handleRemoveProduct}
            handleSearch={this.handleSearch}
            productsList={this.state.products}
            productQuantity={this.state.quantity}
            handleMobileSearch={this.handleMobileSearch}
            handleCategory={this.handleCategory}
            categoryTerm={this.state.category}
            updateQuantity={this.updateQuantity}
            productQuantity={this.state.moq}
          />
          <center>
            {" "}
            <br />
            <Card style={{ width: "22rem" }}>
              <CardHeader>
                {" "}
                <strong>Welcome to the microHawaii E-Shop</strong>
              </CardHeader>
              <CardBody>
                {" "}
                <p> </p>
                <p>
                  Thank you so much for expressing interest in the products
                  microHawaii has to offer!
                  <br></br>
                </p>
                <p> </p>
                <p>
                  More information about the services offered here can be found
                  at the
                  <a href="#/dashboards/services"> services</a> page.
                </p>
                <br></br>
              </CardBody>
            </Card>
          </center>
          <Products
            productsList={this.state.products}
            searchTerm={this.state.term}
            addToCart={this.handleAddToCart}
            productQuantity={this.state.quantity}
            updateQuantity={this.updateQuantity}
            openModal={this.openModal}
          />
          <QuickView
            product={this.state.quickViewProduct}
            openModal={this.state.modalActive}
            closeModal={this.closeModal}
          />{" "}
        </div>
        <center>
          <Card style={{ position: "bottom", width: "26rem" }}>  <CardHeader> <strong>Shirt Sizings:</strong></CardHeader>
            <img src="/images/shirtsize.png" height="80"></img>
          </Card>{" "}
          <br></br>
          <Card  style={{ width: "22rem" }}> 
      
         <CardBody>   <p> </p><p> If you have any questions please use the <a href="#/dashboards/contact"> easy contact form.</a>
<br></br>
         </p><p> </p><p> Please refer to the 
              <a href="#/dashboards/services"> services</a> page for more information about expertises and offers.

         </p>
         <br></br>
         </CardBody>
          </Card>
          <p> </p>
          <p> </p>
          <p> </p>
          <br></br>
          <Card style={{ position: "bottom", width: "17rem" }}>
            <Footer
              style={{ width: "13rem" }}
              cartBounce={this.state.cartBounce}
              total={this.state.totalAmount}
              totalItems={this.state.totalItems}
              cartItems={this.state.cart}
              removeProduct={this.handleRemoveProduct}
              handleCategory={this.handleCategory}
              categoryTerm={this.state.category}
              updateQuantity={this.updateQuantity}
              productQuantity={this.state.moq}
            ></Footer>{" "}
            <CardBody>
              {" "}
              <PayPalButton
                cartBounce={this.state.cartBounce}
                total={this.state.totalAmount}
                totalItems={this.state.totalItems}
                cartItems={this.state.cart}
                removeProduct={this.handleRemoveProduct}
                handleCategory={this.handleCategory}
                categoryTerm={this.state.category}
                updateQuantity={this.updateQuantity}
                productQuantity={this.state.moq}
                style={{ width: "13rem" }}
              />
            </CardBody>{" "}
          </Card>
        </center>{" "}
        <br />
      </Fragment>
    );
  }
}
