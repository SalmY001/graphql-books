import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($profileId: ID!, $skill: String!) {
    addUser(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
