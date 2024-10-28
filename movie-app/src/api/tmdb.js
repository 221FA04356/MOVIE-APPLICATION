import axios from 'axios';

const API_KEY = 'fa86c00250984d152b30063c80c26731'; // TMDB API key
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
    }
});

export default api;