import React from 'react';
import { Query } from 'react-apollo';

import PostCard from '../../shared/components/PostCard';
import PostLoading from '../../shared/components/PostLoading';
import LoadMore from "../../shared/components/LoadMore";
import { GET_POSTS } from '../../shared/get_posts'

const VARIABLES = {
  postsType: "tutorials"
};

const Posts = () => {
  return (
    <Query query={GET_POSTS} variables={VARIABLES}>
      {({ loading, error, data: { postsConnection }, fetchMore }) => {
        if (loading) {
          return (
            <div>
              <PostLoading />
              <PostLoading />
              <PostLoading />
            </div>
          );
        }
        if (error) return `Error: ${error.message}`;

        return (
          <React.Fragment>
            {postsConnection.edges.map(({ node }) => (
              <PostCard key={node.id} post={node} />
            ))}
            {postsConnection.pageInfo.hasNextPage && (
              <LoadMore
                postsConnection={postsConnection}
                fetchMore={fetchMore}
              />
            )}
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default Posts;
