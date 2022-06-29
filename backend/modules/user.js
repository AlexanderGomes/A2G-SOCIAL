const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    userImage: {
   type: String,
  },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    desc: {
        type: String,
        max:50
    },
    isAdmin: {
      type: Boolean,
      default: false,
  },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', userSchema)