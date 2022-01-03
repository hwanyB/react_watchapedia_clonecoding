import axios from "axios";
import axiosInstance from "./index";

export const latesApi = () => axiosInstance.get('/movie/lates');

export const upcomingApi = () => axiosInstance.get('/movie/upcoming');

export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing');

export const topRatedApi = () => axiosInstance.get('/movie/top_rated');

export const populardApi = () => axiosInstance.get('/movie/popular');

export const detaildApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}`);

export const similardApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}/similar`);

export const searchApi = (query: string) => axiosInstance.get(`/search/movie?query=${query}`)
