import React, { Component } from 'react'

import { PostConsumer } from '../../contexts/PostContext'

class PostContent extends Component {
  render() {
    return (
      <PostConsumer>
        {({ post }) => (
          <React.Fragment>
            {post.content &&
              <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            }
            {post.youtubeId &&
              <iframe className="post-video" src={`https://www.youtube.com/embed/${post.youtubeId}?rel=0&autoplay=1`} frameBorder='0' allowFullScreen></iframe>
            }
          </React.Fragment>
        )}
      </PostConsumer>
    )
  }
}

export default PostContent
