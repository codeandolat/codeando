import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query ($postsType: String!) {
    posts(postsType: $postsType) {
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
`;
