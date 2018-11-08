import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

import { PostConsumer } from '../contexts/PostContext'

class PostHeader extends Component {
  render() {
    return(
      <PostConsumer>
        {({ post }) => (
          <header className="card-header post-header">
            <div className="columns">
              <div className="column is-6">
                <p className="card-header-title has-text-grey-light">
                  <TimeAgo date={post.createdAt} />
                </p>
              </div>
              <div className="column is-6 tags post-header-tags">
                <span className="tag is-rounded">ruby</span>
                <span className="tag is-rounded">javascript</span>
              </div>
            </div>
          </header>
        )}
      </PostConsumer>
    )
  }
}

export default PostHeader
