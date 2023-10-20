import axios from 'axios';

export const fetchDeals = async () => {
  const { data } = await axios.get('api/deals');

  return data;
};
