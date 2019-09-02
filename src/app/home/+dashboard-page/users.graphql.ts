import gql from 'graphql-tag';

export const allUsers = gql`
  query GetUsers {
    usersAll {
      id
      first_name
      last_name
      email
      avatar
    }
  }
`;
