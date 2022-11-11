import axios from 'axios';

const { HOST } = process.env;

export const moviesToWatchApi = axios.create({
    baseURL: `http://${HOST}:3001`
})

export const moviesWatchedApi = axios.create({
    baseURL: `http://${HOST}:3002`
})

export const userApi = axios.create({
    baseURL: `http://${HOST}:3003`
});