import axios from "axios";

const BASE_URL = 'https://v2.api.noroff.dev';

export const URL_PRODUCTS = `${BASE_URL}/online-shop`;


//Function to fetch products from the API
export const getProducts = async () => {
  try {
    const response = await axios.get(URL_PRODUCTS);
    return response.data;
  } catch (error) {
    console.error('Unable to fetch products:', error);
  }
}; 

// function to fetch a single product from the API
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${URL_PRODUCTS}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Unable to fetch product:', error);
  }
};