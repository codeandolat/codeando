import React, { Component } from 'react';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';

import { PostProvider } from '../../contexts/PostContext';

class PostCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.post
    };
  }

  render() {
    return (
      <PostProvider value={{ post: this.state.post}}>
        <div className={"card big-margin-bottom rounded-borders " + (this.state.post.youtubeId ? 'big-red-border-left' : 'big-blue-border-left')}>
          <PostHeader />
          <div className="card-content">
            <PostContent />
            <hr />
            <PostFooter />
          </div>
        </div>
      </PostProvider>
    );
  }
}

export default PostCard
