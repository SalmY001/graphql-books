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
  mutation saveBook($criteria: saveBookInput) {
    saveBook(criteria: $criteria, saveBookInput: $saveBookInput) {
      _id
      bookCount
      email
      username
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
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String) {
    removeBook(bookId: $bookId) {
      _id
      bookCount
      email
      savedBooks {
        title
        _id
        authors
        bookId
        description
        image
        link
      }
      username
    }
  }
  `;
