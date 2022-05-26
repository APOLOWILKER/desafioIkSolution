import axios from 'axios';
// import dotenv from 'dotenv';
require('dotenv').config()

const urlBase = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/tasks`;

const getAll = async () => axios.get(urlBase)
  .catch(({response}) => response && response.data);

  const postTask = async (postBody) => axios.post(urlBase, postBody)
  .catch(({ response }) => response && response.data);
const deleteTask = async (taskId) => axios.delete(`${urlBase}/${taskId}`)
  .catch(({ response }) => response && response.data);
const putTask = async (postBody, taskId) => axios.put(`${urlBase}/${taskId}`, postBody)
  .catch(({ response }) => response && response.data);

export {
  getAll,
  postTask,
  deleteTask,
  putTask,
};