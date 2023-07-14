const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

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

    me: async (parent,args,context) => {
      if(context.user){

        return User.findOne({_id:context.user._id});
      }
      throw AuthenticationError;
    },

  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if(!user){
        throw AuthenticationError
      }
      const pswd =  user.isCorrectPassword(password) 
      if(!pswd){
        throw AuthenticationError
      }
      const token = signToken(user)
      return {token,user}

    },
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password  });
      const newToken = signToken(newUser)
      console.log("Add User",newUser,newToken)
      return {token:newToken, user:newUser}
    },
    saveBook: async (parent, { criteria }, context) => {
      if(context.user){
        const savedItem = User.findOneAndUpdate({_id: context.user._id},
          {$push:{savedBooks:criteria}},{new:true})
          return savedItem;
      }
      throw AuthenticationError
    },
    removeBook: async (parent, { bookId }, context) => {
      if(context.user){
        const savedItem = User.findOneAndUpdate({_id: context.user._id},
          {$pull:{savedBooks:{bookId}}},{new:true})
          return savedItem;
      }
      throw AuthenticationError
    },
  },
};

module.exports = resolvers;