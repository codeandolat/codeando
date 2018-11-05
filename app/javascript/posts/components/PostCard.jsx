import React, { Component } from 'react';

import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

class PostCard extends Component {
  render() {
    return(
      <div className="card big-margin-bottom big-green-border-left rounded-borders">
        <PostHeader />
        <div className="card-content">
          <PostContent />
          <hr />
          <PostFooter />
        </div>
      </div>
    )
  }
}

export default PostCard
