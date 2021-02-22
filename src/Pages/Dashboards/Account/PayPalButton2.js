import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
var paypal = require("paypal-rest-sdk");

export default function PayPalButton2() {
  function init() {
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw error;
      } else {
        console.log("Create Payment Response");
        console.log(payment);
      }
    });
    paypal.configure({
      mode: "sandbox", //sandbox or live
      client_id: process.env.REACT_APP_PPCLIENT,
      client_secret: process.env.REACT_APP_PPCLIENT,
    });
    var create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://return.url",
        cancel_url: "http://cancel.url",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "item",
                sku: "item",
                price: "1.00",
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: "1.00",
          },
          description: "This is the payment description.",
        },
      ],
    };
  }

  const loadedOnce = useRef(true);
  useEffect(() => {
    if (loadedOnce.current === true) {
      setTimeout(async () => {
        init();
      }, 100);
      loadedOnce.current = false;
    }
  });
  return (
    <CSSTransitionGroup
      component="span"
      transitionName="MainAnimation5"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnterTimeout={1000}
      transitionEnter={true}
      transitionLeave={false}
    >
      <span>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js"></script>
        <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
        <div id="page"></div>
      </span>
    </CSSTransitionGroup>
  );
}
