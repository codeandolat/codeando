import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import PostCard from './PostCard';
import PostLoading from './PostLoading';

const GET_POSTS = gql`
  {
    posts {
      id
      title
      subtitle
      createdAt
      tagList
      slug
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
        if (loading) {
          return(
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
              <PostCard key={post.id} post={post}/>
            ))}
          </React.Fragment>
        );
      }}
    </Query>
  )
};

export default Posts;
