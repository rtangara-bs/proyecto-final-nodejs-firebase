import * as Model from "../models/products.model.js";

export const getAllProducts = async () => {
  return await Model.getAllProducts();  // devuelve lista del modelo
};

export const getProductById = async (id) => {
  return await Model.getProductById(id); // devuelve de 1 producto
};

export const createProduct = async (newProduct) => {
  return await Model.createProduct(newProduct); // insertamos nuevo dato de producto
};

export const updateProduct = async (id, updatedProductData) => {
  return await Model.updateProduct(id, updatedProductData); // actualiza datos de producto existente
};

export const deleteProduct = async (id) => {
  return await Model.deleteProduct(id); // elimina producto por ID
};
