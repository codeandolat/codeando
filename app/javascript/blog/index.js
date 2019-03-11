import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import { client } from "../shared/apollo-client";

import App from "./components/App";

const blog = document.querySelector("#blog");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  blog
);
