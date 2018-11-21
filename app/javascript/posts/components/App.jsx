import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Posts from "./Posts";
import Post from "./Post";
import Notfound from "./NotFound";

class App extends Component {
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/:slug" component={Post} />
          <Route component={Notfound} />
        </Switch>
      </Router>;
  }
}
export default App
