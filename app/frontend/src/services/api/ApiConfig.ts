import axios from 'axios'
require('dotenv').config();

export const Api = () => {
  return axios.create({
    baseURL: `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/tasks`
  });
}