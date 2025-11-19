import API from "../api/api";

export const addToCart = (data) => API.post("/cart/add", data);

export const getCart = (userId) => API.get(`/cart/${userId}`);
