import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",  // Change to deployed backend URL later
});

export default API;
