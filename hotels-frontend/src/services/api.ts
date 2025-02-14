import axios from "axios";

// Define la URL base del backend
const API_URL = `http://localhost:5000/api`;

// Crea una instancia de Axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
