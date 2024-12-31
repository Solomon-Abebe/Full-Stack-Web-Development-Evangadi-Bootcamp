import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
//   const url = 'https://api.themoviedb.org/3';
// const url = 'https://api.themoviedb.org/3/configuration';
});

export default instance;