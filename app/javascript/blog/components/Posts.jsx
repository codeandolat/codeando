import React from "react";
import { Query } from "react-apollo";
import queryString from "query-string";

import PostCard from "../../shared/components/PostCard";
import PostLoading from "../../shared/components/PostLoading";
import LoadMore from "../../shared/components/LoadMore";
import { GET_POSTS } from "../../shared/get_posts";

const VARIABLES = {
  postsType: "blog"
};

const getFilteredPosts = (posts, tag) => {
  return (
    <React.Fragment>
      {posts.edges
        .filter(({ node }) => node.tagList.includes(tag))
        .map(({ node }) => (
          <PostCard key={node.id} post={node} />
        ))}
      {posts.pageInfo.hasNextPage && (
        <LoadMore postsConnection={posts} fetchMore={fetchMore} />
      )}
    </React.Fragment>
  );
};

const getPosts = (posts) => {
  return (
    <React.Fragment>
      {posts.edges.map(({ node }) => (
        <PostCard key={node.id} post={node} />
      ))}
      {posts.pageInfo.hasNextPage && (
        <LoadMore postsConnection={posts} fetchMore={fetchMore} />
      )}
    </React.Fragment>
  );
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

        let queryTag = queryString.parse(location.search);

        if (queryTag.tag) {
          return getFilteredPosts(postsConnection, queryTag.tag);
        } else {
          return getPosts(postsConnection);
        }
      }}
    </Query>
  );
};

export default Posts;
