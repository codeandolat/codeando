import React, { Component } from 'react'

import { PostConsumer } from '../../contexts/PostContext'

class PostContent extends Component {
  render() {
    return (
      <PostConsumer>
        {({ post }) => (
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </PostConsumer>
    )
  }
}

export default PostContent
