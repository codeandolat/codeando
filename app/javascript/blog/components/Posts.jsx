import React from 'react';
import { Query } from 'react-apollo';

import PostCard from '../../shared/components/PostCard';
import PostLoading from '../../shared/components/PostLoading';
import { GET_POSTS } from '../../shared/get_posts'

const VARIABLES = {
  postsType: "blog"
};

const Posts = () => {
  return (
    <Query query={GET_POSTS} variables={VARIABLES}>
      {({ loading, error, data: { posts } }) => {
        if (loading) {
          return (
            <div>
              <PostLoading />
              <PostLoading />
              <PostLoading />
            </div>
          )
        }
        if (error) return `Error: ${error.message}`;

        return (
          <React.Fragment>
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </React.Fragment>
        );
      }}
    </Query>
  )
};

export default Posts;
