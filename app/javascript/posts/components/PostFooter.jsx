import React, { Component } from "react"

import { PostConsumer } from "../../contexts/PostContext";

class PostFooter extends Component {
  render() {
    return (
      <PostConsumer>
        {({ post }) => (
          <div className="columns post-footer">
            <div className="column is-6">
              <a href={`/posts/${post.slug}`} className="button is-rounded is-outlined is-success">
                Read More
              </a>
            </div>
            <div className="column is-6 post-footer-icons">
              <div className="post-footer-item">
                <i className="fa fa-comment-o is-size-4"></i>
                <span className="count">7</span>
              </div>
              <div className="post-footer-item">
                <i className="fa fa-heart is-size-4"></i>
                <span className="count">10</span>
              </div>
            </div>
          </div>
        )}
      </PostConsumer>
    )
  }
}

export default PostFooter
