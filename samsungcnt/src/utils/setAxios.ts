import axios from 'axios';

export default axios

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
    timeout: 90000,
})
