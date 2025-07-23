import * as Service from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  const products = await Service.getAllProducts(); //llama al servicio y entrega lista
  res.json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Service.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });// mensaje si no existe
  }
};

export const createProduct = async (req, res) => {
  const newProduct = req.body;
  const createdProduct = await Service.createProduct(newProduct);
  res.status(201).json(createdProduct); // creacion OK
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProductData = req.body;

  const updatedProduct = await Service.updateProduct(id, updatedProductData);

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deletedProduct = await Service.deleteProduct(id);
  console.log({ deletedProduct });
  if (deletedProduct) {
    res.json({ message: "Product deleted successfully" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
