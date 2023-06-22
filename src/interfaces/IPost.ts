import mongoose from "mongoose";

export default interface IPost {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
