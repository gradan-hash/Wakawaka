import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("requests", requestSchema);
