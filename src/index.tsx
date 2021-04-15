import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import { Global, css } from "@emotion/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
          overflow: hidden;
        }

        #root {
          display: flex;
          flex-direction: column;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #fff;
        }

        a,
        a:active {
          color: inherit;
          text-decoration: none;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
        }
      `}
    />
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
