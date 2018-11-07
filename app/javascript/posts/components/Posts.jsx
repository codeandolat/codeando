import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import PostCard from './PostCard';

const GET_POSTS = gql`
  {
    posts {
      id
      title
      subtitle
      author {
        email
      }
    }
  }
`;

const Posts = () => {
  return (
    <Query query={GET_POSTS}>
      {({ loading, error, data: { posts } }) => {
        if (loading) return "Loading...";
        if (error) return `Error: ${error.message}`;
  
        return (
          <ul>
            {posts.map(post => (
              <PostCard key={post.id} post={post}/>
            ))}
          </ul>
        );
      }}
    </Query>
  )
};

export default Posts;
