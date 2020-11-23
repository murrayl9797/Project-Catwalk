import axios from 'axios';

const getProductImages = async (currentProduct) => {
  try {
    const response = await axios(
      `http://3.21.164.220/products/${currentProduct.id}/styles`
    );
    return Object.assign({}, response.data, currentProduct);
  } catch (err) {
    console.log('Error getting images: ', err);
  }
};

export default getProductImages;
