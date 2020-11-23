import axios from 'axios';

const getRelatedProducts = async (productID) => {
  try {
    const response = await axios(
      `http://3.21.164.220/products/${productID.id}/related`
    );
    return response.data;
  } catch (error) {
    console.log('Error getting related Products: ', error);
  }
};

export default getRelatedProducts;
