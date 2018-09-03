// Base API Configuration

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.spotify.com'
});

API.interceptors.request.use(function (config) {
// Set common parameters for each request to the API.
config.params.APPID = '74aebec0bdb74229a916393be4fbd479';
config.params.units = 'imperial';

return config;
}, function (error) {
    return Promise.reject(error);
});