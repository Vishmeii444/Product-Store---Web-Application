import mongoose from "mongoose";

//how the products should look like basically
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt fields
  },
);

const product = mongoose.model('product', productSchema);

export default product;