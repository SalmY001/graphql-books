const { Book, User } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },

    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },

    users: async () => {
      return User.find();
    },

    me: async () => {
      return User.find();
    },

  },

  Mutation: {
    login: async (parent, { email, password }) => {
      return await Auth.findOne({ email, password});
    },
    addUser: async (parent, { username, email, password }) => {
      return await Auth.create({ username, email, password  });
    },
    saveBook: async (parent, { criteria }) => {
      return User.findOne({criteria});
    },
    removeBook: async (parent, { bookId }) => {
      return User.findOneAndDelete({ _id: bookId });
    },
  },
};

module.exports = resolvers;