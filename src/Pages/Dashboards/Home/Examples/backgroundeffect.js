import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import "./particles.min.js";

export default function App(init) {
  async function init() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 55,
          density: {
            enable: true,
            value_area: 200,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 3,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.8,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 25,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 50,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 150,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
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
      <div
        style={{
          position: "fixed",
          zIndex: 0,
          width: "100%",
          height: "100%",
          opacity: 1,
        }}
        id="particles-js"
      ></div>
    </CSSTransitionGroup>
  );
}
