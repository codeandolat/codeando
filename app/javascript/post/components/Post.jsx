import React, { Component } from 'react'

class Post extends Component {
  render() {
    return(
      <h1 className="title is-1">{this.props.post.title}</h1>
    )
  }
}

export default Post
