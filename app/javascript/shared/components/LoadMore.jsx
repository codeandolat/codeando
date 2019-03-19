import React, { Component } from 'react'

const updateQuery = (previousResult, { fetchMoreResult }) => {
  const newEdges = fetchMoreResult.postsConnection.edges;
  const pageInfo = fetchMoreResult.postsConnection.pageInfo;

  return newEdges.length
    ? {
      postsConnection: {
        __typename: "PostConnection",
        edges: [...previousResult.postsConnection.edges, ...newEdges],
        pageInfo
      }
    }
    : previousResult;
};

class LoadMore extends Component {
  render() {
    const postsConnection = this.props.postsConnection;
    const fetchMore = this.props.fetchMore;
    return(
      <div className="has-text-centered">
        <button
          className="button is-info"
          type="button"
          onClick={() =>
            fetchMore({
              variables: {
                cursor: postsConnection.pageInfo.endCursor,
              },
              updateQuery,
            })
          }
        >
          More Posts
        </button>
      </div>
    )
  }
}

export default LoadMore
