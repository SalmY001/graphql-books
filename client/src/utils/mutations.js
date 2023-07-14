import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String, $email: String, $password: String) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      bookCount
      email
      savedBooks {
        _id
        authors
        bookId
        description
        image
        link
        title
      }
    }
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

export const SAVE_BOOK = gql`
  mutation saveBook($email: String!, $password: String!) {
    saveBook(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
