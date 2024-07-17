import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
    min:3,
    max:20
  },
  email:{
    type: String,
    required: true,
    unique: true,
    min: 6,
  },
  password:{
    type: String,
  },
  img: {
    type: String,
    default: ""
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

const postSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true 
  },
  img: {
    type: String,
    default: ""
  },
  userId: {
    type:String,
    required: true
  },
  slug:{
    type: String,
    unique: true,
    required: true
  }
}, {timestamps: true});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
