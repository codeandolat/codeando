import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Post from './Post'
import Loading from './Loading'

const slug = location.pathname.split("/posts/")[1]

const GET_POST = gql`
  {
    post(id: "${slug}") {
      id
      title
      subtitle
      content
      youtubeId
      imageUrl
      slug
      createdAt
    }
  }
`;

const PostContainer = () => {
  return (
    <Query query={GET_POST}>
      {({ loading, error, data: { post } }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) return `Error: ${error.message}`;

        return (
          <Post post={post}/>
        );
      }}
    </Query>
  )
};

export default PostContainer
