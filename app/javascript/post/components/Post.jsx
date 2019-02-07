import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

import MeAvatar from 'images/avatar.png'

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post
    };
  }

  render() {
    return(
      <div className="container post post-container">
        <div className="columns">
          <div className={`column ${this.state.post.imageUrl ? 'is-6' : 'is-12'} post-title-container has-text-left`}>
            <h1 className="title is-1">{this.state.post.title}</h1>
            <div className="is-flex author has-left-text medium-margin-top">
              <figure className="image is-64x64">
                <img className="is-rounded" src={MeAvatar} />
              </figure>
              <div className="info">
                <p className="name">David Sanchez</p>
                <TimeAgo date={this.state.post.createdAt} />
              </div>
            </div>
          </div>
          {this.state.post.imageUrl &&
            <div className="column is-6 has-text-right">
              <figure className="image">
                <img className="post-image" src={this.state.post.imageUrl} />
              </figure>
            </div>
          }
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
      </div>
    )
  }
}

export default Post
