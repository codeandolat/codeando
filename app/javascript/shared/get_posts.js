import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query ($postsType: String!, $cursor: String) {
    postsConnection(postsType: $postsType, first: 1, after: $cursor) {
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          subtitle
          createdAt
          tagList
          youtubeId
          slug
          author {
            email
          }
        }
      }
    }
  }
`;
