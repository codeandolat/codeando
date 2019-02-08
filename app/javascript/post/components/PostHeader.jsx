import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

import { PostConsumer } from '../../contexts/PostContext';
import MeAvatar from 'images/avatar.png'

class PostHeader extends Component {
  render() {
    return(
      <PostConsumer>
        {({ post }) => (
          <React.Fragment>
            <div className={`column ${post.imageUrl ? 'is-6' : 'is-12'} post-title-container has-text-left`}>
              <h1 className="title is-1">{post.title}</h1>
              <div className="is-flex author has-left-text medium-margin-top">
                <figure className="image is-64x64">
                  <img className="is-rounded" src={MeAvatar} />
                </figure>
                <div className="info">
                  <p className="name">David Sanchez</p>
                  <TimeAgo date={post.createdAt} />
                </div>
              </div>
            </div>
            {post.imageUrl &&
              <div className="column is-6 has-text-right">
                <figure className="image">
                  <img className="post-image" src={post.imageUrl} />
                </figure>
              </div>
            }
          </React.Fragment>
        )}
      </PostConsumer>
    )
  }
}

export default PostHeader
