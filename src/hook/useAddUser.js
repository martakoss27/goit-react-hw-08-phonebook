import axios from 'axios';

export const useAddUser = async user => {
  try {
    await axios.post('https://656008da83aba11d99d01e5e.mockapi.io/users', user);
  } catch (error) {
    return console.log(error);
  }
};
