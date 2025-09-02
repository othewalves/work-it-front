import axios from "axios";

const api = axios.create({
    baseURL: 'https://work-it-api-production.up.railway.app',
    // headers: {
    withCredentials: true,
    // "Content-Type": "application/json",
    // },
});

// api.interceptors.request.use(config => {
//     const token = localStorage.getItem("token");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

export default api;
