import Product from "@/db/models/Products.js";
import dbConnect from "../../../db/connect.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const products = await Product.find();

    if (!products) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(products);
  }
}
