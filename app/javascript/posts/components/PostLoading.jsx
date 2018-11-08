import React, { Component } from 'react'

class PostLoading extends Component {
  render() {
    return(
      <div className="card post-loading big-margin-bottom big-blue-border-left rounded-borders">
        <div className="card-content">
          <div className="post-loading-header"></div>
          <hr/>
          <div className="post-loading-content is-60"></div>
          <div className="post-loading-content is-40"></div>
          <div className="post-loading-content is-80"></div>
          <div className="post-loading-content is-60"></div>
          <hr/>
          <div className="post-loading-button"></div>
        </div>
      </div>
    )
  }
}

export default PostLoading
