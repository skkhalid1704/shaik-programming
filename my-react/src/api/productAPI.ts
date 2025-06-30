import axiosClient from "axios";

export const getProductById = async (productId: string) => {
  console.log("ProductAPI: ParameterValue: ", productId);
  const response = await axiosClient.get(
    `http://localhost:8080/api/product/${productId}`
  );
  console.log("ProductAPI: Response: \n", response);
  return response.data;
};
export const getAllProducts = async () => {
  const response = await axiosClient.get("http://localhost:8080/api/product/");
  console.log("HomeAPI: Response \n", response);
  return response.data;
};
