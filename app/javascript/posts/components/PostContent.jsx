import React, { Component } from 'react'

import { PostConsumer } from "../contexts/PostContext";

class PostContent extends Component {
  render() {
    return (
      <PostConsumer>
        {({ post }) => (
          <div>
            <h1 className="title is-3">
              {post.title}
            </h1>
            <p className="big-margin-bottom">
              {post.subtitle}
            </p>
          </div>
        )}
      </PostConsumer>
    )
  }
}

export default PostContent
