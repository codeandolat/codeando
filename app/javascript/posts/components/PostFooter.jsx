import React, { Component } from "react"

class PostFooter extends Component {
  render() {
    return (
      <div className="columns post-footer">
        <div className="column is-6">
          <button className="button is-rounded is-outlined is-success">Ver mas</button>
        </div>
        <div className="column is-6 post-footer-icons">
          <div className="post-footer-item">
            <i className="fa fa-comment-o is-size-4"></i>
            <span className="count">7</span>
          </div>
          <div className="post-footer-item">
            <i className="fa fa-heart-o is-size-4"></i>
            <span className="count">10</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PostFooter
