import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import PostCard from '../../shared/components/PostCard';
import PostLoading from '../../shared/components/PostLoading';

const VARIABLES = {
  postsType: "tutorials"
};

const GET_POSTS = gql`
  query ($postsType: String!) {
    posts(postsType: $postsType) {
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
