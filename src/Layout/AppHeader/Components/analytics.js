import { getCLS, getFID, getLCP } from "web-vitals";
import React, { Fragment } from "react";
import ReactGA from "react-ga";

ReactGA.initialize("UA-102481694-7");
ReactGA.pageview(window.location + window.location.search);
ReactGA.ga;
function sendToGoogleAnalytics({ name, delta, id }) {
  // Assumes the global `ga()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/analyticsjs
  ReactGA.ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: name,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    eventValue: Math.round(name === "CLS" ? delta * 1000 : delta),
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    eventLabel: id,
    // Use a non-interaction event to avoid affecting bounce rate.
    nonInteraction: true,
    // Use `sendBeacon()` if the browser supports it.
    transport: "beacon",
  });
}

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);
class SendToGoogleAnalytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      delta: "",
    };
  }
  render() {
    ReactGA.ga("send", "event", {
      eventCategory: "Web Vitals",
      eventAction: name,
      // Google Analytics metrics must be integers, so the value is rounded.
      // For CLS the value is first multiplied by 1000 for greater precision
      // (note: increase the multiplier for greater precision if needed).
      // The `id` value will be unique to the current page load. When sending
      // multiple values from the same page (e.g. for CLS), Google Analytics can
      // compute a total by grouping on this ID (note: requires `eventLabel` to
      // be a dimension in your report).
      // Use a non-interaction event to avoid affecting bounce rate.
      nonInteraction: true,
      // Use `sendBeacon()` if the browser supports it.
      transport: "beacon",
    });

    return null;
  }
}
export default SendToGoogleAnalytics;
