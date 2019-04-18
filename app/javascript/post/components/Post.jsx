import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

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
        <Helmet>
          <meta property="og:title" content={this.state.post.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={"https://code-ando.com/posts/" + this.state.post.slug} />
          <meta property="og:image" content="https://code-ando.com/assets/avatar.png" />
          <meta property="og:description" content={this.state.post.subtitle} />
          <meta property="og:site_name" content={this.state.post.title} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={this.state.post.subtitle} />
          <meta name="twitter:title" content={this.state.post.title} />
          <meta name="twitter:site" content="@codeando" />
          <meta name="twitter:image" content="https://code-ando.com/assets/avatar.png" />
          <meta name="twitter:creator" content="@Sanchezdav" />
        </Helmet>
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
