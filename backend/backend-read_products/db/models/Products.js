import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, requiered: true },
  price: { type: Number, requiered: true },
  currency: { type: String, requiered: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
