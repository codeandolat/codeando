import React, { Component } from "react";

import Post from "./Post";

class App extends Component {
  constructor(props) {
    super(props);

    const postContainer = document.getElementById('post')
    const data = JSON.parse(postContainer.getAttribute("data"));

    this.state = { post: data };
  }

  render() {
    return <Post post={this.state.post} />;
  }
}
export default App
