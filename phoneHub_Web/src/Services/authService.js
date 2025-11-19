import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

const signup = (data) => axios.post(`${BASE_URL}/signup`, data);

const login = (data) => axios.post(`${BASE_URL}/login`, data);

export default { signup, login };
