import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`, config);

  return response.data;
};

const productService = {
  getProducts,
  getProduct,
};

export default productService;
