import mongoose from "mongoose";
import {model, models} from "mongoose";

// Declare the Schema of the Mongo model
const userInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
      },
      streetAddress: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      admin: {
        type: Boolean,
        default: false
      },
}, {timestamps: true});

//Export the model
export const UserInfo = models?.UserInfo || model("UserInfo", userInfoSchema);