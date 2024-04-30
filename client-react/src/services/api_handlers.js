import axios from 'axios';

export const getAllUsers = async (url) => {
  const response = await axios.get(url);
  return { ...response.data };
};

export const addUser = async (url, { arg }) => {
  const response = await axios.post(url, { name: arg });

  return { response };
};

export const deleteUser = async (url, { arg }) => {
  const response = await axios.delete(`${url}/${arg}`);

  return { response };
};

export const resetData = async (url) => {
  const response = await axios.post(url);

  return { ...response.data };
};
