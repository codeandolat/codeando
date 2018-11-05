import React, { Component } from 'react'

class PostHeader extends Component {
  render() {
    return(
      <header className="card-header post-header">
        <div className="columns">
          <div className="column is-6">
            <p className="card-header-title has-text-grey-light">12 hours ago</p>
          </div>
          <div className="column is-6 tags post-header-tags">
            <span className="tag is-rounded">ruby</span>
            <span className="tag is-rounded">javascript</span>
          </div>
        </div>
      </header>
    )
  }
}

export default PostHeader
