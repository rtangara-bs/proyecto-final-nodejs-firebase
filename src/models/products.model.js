import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';

const productsCollection = collection(db, "products"); //referencia a la coleccion

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const docRef = doc(productsCollection, id); // referencia al doc
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }; //devuelve datos si existe
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return { message: JSON.stringify(error) };
  }
};

export const createProduct = async (newProduct) => {
  try {
    const docRef = await addDoc(productsCollection, newProduct); // crea doc con iD automatico
    return { id: docRef.id, ...newProduct };
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsCollection, id);
    await setDoc(docRef, updatedProductData, { merge: true });// modifica campos
    return { id, ...updatedProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    await deleteDoc(docRef); // elimina el documento
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

