import React from "react";
import { render } from "react-dom";
import App from "../app/App";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-150749315-1');
ReactGA.pageview(window.location.pathname);
import { StaticRouter } from 'react-router'

render(<StaticRouter><App /></StaticRouter>, document.getElementById("root"));
