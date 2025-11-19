import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Interceptor (optional for token later)
API.interceptors.request.use((req) => {
  const user = localStorage.getItem("user");
  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
  }
  return req;
});

export default API;
