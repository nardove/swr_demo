import axios from 'axios';

export const getAllUsers = async (url) => {
  const response = await axios.get(url).catch((error) => ({ error }));

  return response.data;
};

export const addUser = async (url, name) => {
  const response = await axios
    .post(url, { name })
    .catch((error) => ({ error }));

  return { response };
};

export const deleteUser = async (url, id) => {
  const response = await axios
    .delete(`${url}/${id}`)
    .catch((error) => ({ error }));

  return { response };
};

export const resetData = async (url) => {
  const response = await axios.post(url).catch((error) => ({ error }));

  return response.data;
};
