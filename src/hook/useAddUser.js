import axios from 'axios';

export const useAddUser = async user => {
  try {
    await axios.post('', user);
  } catch (error) {
    return console.log(error);
  }
};
