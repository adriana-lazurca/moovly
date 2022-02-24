import axios from 'axios';

export const createUser = async (user) => {
   const url = 'http://localhost:3001/users';

   try {
      const { data } = await axios.post(url, user);
      return data;
   } catch (error) {
      console.error('There was an error!', error);
   }
};
