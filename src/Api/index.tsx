import axios from "axios";

const BASE_URL = 'https://v2.api.noroff.dev';

export const URL_PRODUCTS = `${BASE_URL}/online-shop`;

// Function to fetch products from the API
export const getProducts = async () => {
  try {
    const response = await axios.get(URL_PRODUCTS);
    return response.data;
  } catch (error) {
    console.error('Unable to fetch products:', error);
    throw error; // Throw the error to propagate it to the caller
  }
  console.log("Hello");
}; 

// Function to fetch a single product from the API
export const getProductById = async (id: number) => {
  try {
    const response = await axios.get(`${URL_PRODUCTS}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Unable to fetch product:', error);
    throw error; // Throw the error to propagate it to the caller
  }
};
