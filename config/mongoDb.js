import mongoose from "mongoose";

const url =
  "mongodb+srv://Shubham_L:MH14jt9445$@skillup.bpeco.mongodb.net/Hubnex-skillup?retryWrites=true&w=majority&appName=skillup";

export default async function connectDb() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
}
