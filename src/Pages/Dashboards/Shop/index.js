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
import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
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

  UNSAFE_componentWillMount() {
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
          <center>
            <br />
            <Card
              style={{
                width: "26rem",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              }}
            >
              <CardHeader>
                {" "}
                <strong>MicroHawaii E-Shop</strong>
              </CardHeader>
              <CardBody>
                {" "}
                <p> </p>
                <p>
                  Here you can find an array of focuses MicroHawaii has to
                  offer.
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
          <Card style={{ justifyContent: "center", width: "26rem" }}>
            <CardHeader>Shirt Size Chart:</CardHeader>
            <img src="/images/shirtsize.png" height="80"></img>
          </Card>{" "}
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
              <CardHeader>Quick CheckOut:</CardHeader>
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
            </CardBody>
          </Card>
          <p> </p>
          <p> </p>
        </center>{" "}
        <br />
        <Row style={{ justifyContent: "center" }}>
          <Col sm="12" md="6" xl="4" style={{ justifyContent: "center" }}>
            <Card
              style={{ justifyContent: "center" }}
              className="card-shadow-primary card-border text-white mb-3"
              color="primary"
            >
              <CardHeader>Any Questions?</CardHeader>
              <div
                className="dropdown-menu-header"
                style={{ justifyContent: "center" }}
              >
                <div
                  className="dropdown-menu-header-inner bg-primary"
                  style={{ justifyContent: "center" }}
                >
                  <div className="menu-header-content">
                    <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                      <div className="avatar-icon">
                        <img src={avatar1} alt="Avatar 5" />
                      </div>
                    </div>
                    <div>
                      <h5 className="menu-header-title">Jason Hoku Levien</h5>
                      <h6 className="menu-header-subtitle">Founder / Owner</h6>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="text-center d-block">
                <a href="#/dashboards/contact">
                  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Contact
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
