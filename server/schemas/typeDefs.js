const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID
    bookId: String
    authors: [String]!
    description: String
    image: String
    link: String
    title: String
  }

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    books: [Book]
    users: [User]
    book(id: ID!): Book
    me: User
}

input saveBookInput {
    authors: [String]!
    description: String
    title: String
    bookId: String
    image: String
    link: String
}

type Mutation {
    # Set the required fields for mutations
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(criteria: saveBookInput): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;