import axios from 'axios'

//https://api.themoviedb.org/3/movie/now_playing?api_key=264d2d421ad20f4b0cf9c0d92e963371&language=pt-br&page=1

export const key = '264d2d421ad20f4b0cf9c0d92e963371'

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})
export default api;

