import React, { Component } from 'react'

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
          </div>
          {this.state.post.imageUrl &&
            <div className="column is-6 has-text-right">
              <figure className="image">
                <img src={this.state.post.imageUrl} />
              </figure>
            </div>
          }
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
      </div>
    )
  }
}

export default Post
