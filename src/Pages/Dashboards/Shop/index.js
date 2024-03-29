import React, { Component, Fragment } from "react";
import Products from "./Products";
import Footer from "./Footer";
import axios from "axios";
import QuickView from "./QuickView";
import { Helmet } from "react-helmet";

import {
  Row,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  NavLink,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

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
      payPalLink: null,
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
    let url = "/products.json";
    axios.get(url).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  componentDidMount() {
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
      let index = cartItem.findIndex((x) => x.id === productID);
      cartItem[index].quantity = Number(cartItem[index].quantity) + Number(productQty);
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
    let index = cart.findIndex((x) => x.id === id);
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
    var gotAmount = this.state.totalAmount;

    document.getElementById("popupContainer");
    return (
      <Fragment>
        <Helmet>
          <title>MicroHawaii.com Shop</title>
          <meta name="description" content="Find and purchase MicroHawaii services and products." />
          <meta name="theme-color" content="#008f68" />
          <link rel="canonical" href="https://microhawaii.com/shop" />
        </Helmet>
        <Row
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: "-15px",
            marginBottom: "-15px",

            textAlign: "center",
          }}
          width="100%"
        >
          <CardTitle
            style={{
              textAlign: "center",
              borderRadius: "25px",
              backgroundColor: "#240077BB",
              paddingRight: "10px",
              paddingLeft: "10px",
              fontWeight: "900",
              color: "whitesmoke",
              fontSize: "36px",
            }}
          >
            Shop
          </CardTitle>
        </Row>
        <div>
          <center>
            {" "}
            <br />
            <Card
              style={{
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                borderRadius: "35px",
              }}
            >
              <CardTitle>
                <div width="100%">
                  <strong style={{ fontSize: "130%" }}></strong>{" "}
                </div>
                <br />
                <br />
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "125%",
                    fontWeight: 999,
                    margin: "15px",
                  }}
                >
                  Here you'll find an array of services and products MicroHawaii has to offer.
                </span>
                <br />
                <br /> <a href="/contact">Questions?</a>
              </CardTitle>
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
          <Card
            style={{
              position: "bottom",
              width: "24rem",
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            {" "}
            <CardHeader>
              {" "}
              <strong>Shirt Sizes:</strong>
            </CardHeader>
            <img src="/images/shirtsize.png" height="80"></img>
          </Card>{" "}
          <br></br>
          <Card
            style={{
              width: "22rem",
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            <CardBody style={{ textAlign: "left", fontSize: "120%" }}>
              <li>
                If you have any questions please use the{" "}
                <a href="/contact"> contact form.</a>
              </li>{" "}
              <br />
              <li>
                <a href="/services">The services page</a> has more information about
                skillsets.
              </li>
            </CardBody>
          </Card>
          <p> </p>
          <p> </p>
          <p> </p>
          <br></br>
          <Card
            style={{
              position: "bottom",
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            <Footer
              style={{ width: "13rem" }}
              cartBounce={this.state.cartBounce}
              total={gotAmount}
              totalItems={this.state.totalItems}
              cartItems={this.state.cart}
              removeProduct={this.handleRemoveProduct}
              handleCategory={this.handleCategory}
              categoryTerm={this.state.category}
              updateQuantity={this.updateQuantity}
              productQuantity={this.state.moq}
            ></Footer>{" "}
            <CardBody>
              Total: ${this.state.totalAmount} <br />
              <button
                disabled={!this.state.totalAmount > 3}
                id="CheckoutButtonID"
                onClick={(e) => {
                  document.getElementById("CheckoutButtonID").innerHTML = "Creating Order...";

                  e.preventDefault();
                  console.log("Running");
                  require("firebase/functions");
                  const auth = firebase.auth();
                  async function sendRequest(props) {
                    var useEmulator = true;
                    //Emulator local url for development:
                    let fetchURL = "";
                    const urlLocal = `http://localhost:5111/microhawaii-5f97b/us-central1/createPayment?payment=${gotAmount}`;

                    //Live  url:
                    const urlLive = `https://us-central1-microhawaii-5f97b.cloudfunctions.net/createPayment?payment=${gotAmount}`;

                    if (useEmulator && window.location.hostname.includes("localhost")) {
                      fetchURL = urlLocal;
                    } else {
                      fetchURL = urlLive;
                    }

                    //Send Details to Functions
                    const rawResponse = await fetch(fetchURL, {
                      method: "POST",
                      mode: "cors",
                      headers: new Headers({
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        HeaderTokens: JSON.stringify({
                          refreshToken: auth.currentUser ? auth.currentUser.refreshToken : "guest",
                          authDomain: auth.currentUser ? auth.currentUser.authDomain : "guest",
                          uid: auth.currentUser ? auth.currentUser.uid : "guest",
                          name: auth.currentUser ? auth.currentUser.displayName : "guest",
                          email: auth.currentUser ? auth.currentUser.email : "guest",
                          hostname: window.location.hostname,
                        }),
                      }),
                      body: JSON.stringify({
                        UUID: auth.currentUser ? auth.currentUser.uuid : "guest",
                      }),
                    });
                    return console.log(await rawResponse.json());
                  }
                  async function sendRequest(props) {
                    var useEmulator = true;
                    //Emulator local url for development:
                    let fetchURL = "";
                    const urlLocal = `http://localhost:5111/microhawaii-5f97b/us-central1/createPayment?payment=${gotAmount}`;

                    //Live  url:
                    const urlLive = `https://us-central1-microhawaii-5f97b.cloudfunctions.net/createPayment?payment=${gotAmount}`;

                    if (useEmulator && window.location.hostname.includes("localhost")) {
                      fetchURL = urlLocal;
                    } else {
                      fetchURL = urlLive;
                    }

                    //Send Details to Functions
                    const rawResponse = await fetch(fetchURL, {
                      method: "POST",
                      mode: "cors",
                      headers: new Headers({
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        HeaderTokens: JSON.stringify({
                          refreshToken: auth.currentUser ? auth.currentUser.refreshToken : "guest",
                          authDomain: auth.currentUser ? auth.currentUser.authDomain : "guest",
                          uid: auth.currentUser ? auth.currentUser.uid : "guest",
                          name: auth.currentUser ? auth.currentUser.displayName : "guest",
                          email: auth.currentUser ? auth.currentUser.email : "guest",
                          hostname: window.location.hostname,
                        }),
                      }),
                      body: JSON.stringify({
                        UUID: auth.currentUser ? auth.currentUser.uuid : "guest",
                      }),
                    });
                    return await rawResponse.json();
                  }
                  async function sendRequest(props) {
                    var useEmulator = true;
                    //Emulator local url for development:
                    let fetchURL = "";
                    const urlLocal = `http://localhost:5111/microhawaii-5f97b/us-central1/createPayment?payment=${gotAmount}`;

                    //Live  url:
                    const urlLive = `https://us-central1-microhawaii-5f97b.cloudfunctions.net/createPayment?payment=${gotAmount}`;

                    if (useEmulator && window.location.hostname.includes("localhost")) {
                      fetchURL = urlLocal;
                    } else {
                      fetchURL = urlLive;
                    }

                    //Send Details to Functions
                    const rawResponse = await fetch(fetchURL, {
                      method: "POST",
                      mode: "cors",
                      headers: new Headers({
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        HeaderTokens: JSON.stringify({
                          refreshToken: auth.currentUser ? auth.currentUser.refreshToken : "guest",
                          authDomain: auth.currentUser ? auth.currentUser.authDomain : "guest",
                          uid: auth.currentUser ? auth.currentUser.uid : "guest",
                          name: auth.currentUser ? auth.currentUser.displayName : "guest",
                          email: auth.currentUser ? auth.currentUser.email : "guest",
                          hostname: window.location.hostname,
                        }),
                      }),
                      body: JSON.stringify({
                        UUID: auth.currentUser ? auth.currentUser.uuid : "guest",
                      }),
                    });
                    return await rawResponse.json();
                  }

                  sendRequest()
                    .then((result) => {
                      console.log(result);

                      document.getElementById("CheckoutButtonID").innerHTML =
                        "Success! Finalize With PayPal Below.";
                      console.log(result);

                      document.getElementById("PayPalLinkID").hidden = false;
                      document.getElementById("CheckoutButtonID").disabled = true;

                      this.setState({ payPalLink: result });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                style={{ fontSize: "22px", width: "50%", height: "75px", alignSelf: "center" }}
                color="primary"
              >
                {this.state.totalAmount ? "Proceed To Checkout" : "Cart Is Empty"}
              </button>
              <div
                hidden={
                  this.state.payPalLink === null
                }
                id="PayPalLinkID"
              > <br />
                <a href={this.state.payPalLink}>Checkout With PayPal By Clicking Here</a>
              </div>
            </CardBody>{" "}
          </Card>
        </center>{" "}
        <br />
      </Fragment>
    );
  }
}
