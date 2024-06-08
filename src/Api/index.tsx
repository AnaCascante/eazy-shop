const BASE_URL = 'https://v2.api.noroff.dev';

export const URL_PRODUCTS = `${BASE_URL}/online-shop`;

// Function to fetch products from the API
export const getProducts = async () => {
  try {
    const response = await fetch(URL_PRODUCTS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Unable to fetch products:', error);
  }

};

// Function to fetch a single product from the API
export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`${URL_PRODUCTS}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Unable to fetch product:', error);
  }
};
