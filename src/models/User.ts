import { Schema, model, models } from "mongoose";
import IUser from "@/interfaces/IUser";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.user || model("user", userSchema);
export default User;
