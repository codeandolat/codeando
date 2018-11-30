import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from './Loading'

const slug = location.pathname.split("/posts/")[1]

const GET_POST = gql`
  {
    post(id: "${slug}") {
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

const Post = () => {
  return (
    <Query query={GET_POST}>
      {({ loading, error, data: { post } }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) return `Error: ${error.message}`;

        return (
          <div>
            <h1 className="title is-1">{post.title}</h1>
          </div>
        );
      }}
    </Query>
  )
};

export default Post
