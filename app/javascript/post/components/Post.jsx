import React, { Component } from 'react'

import { PostProvider } from '../../contexts/PostContext';
import PostHeader from './PostHeader'
import PostContent from './PostContent'

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post
    };
  }

  render() {
    return(
      <PostProvider value={{ post: this.state.post }}>
        <div className="container post post-container">
          <div className="columns">
            <PostHeader />
          </div>
          <PostContent />
        </div>
      </PostProvider>
    )
  }
}

export default Post
