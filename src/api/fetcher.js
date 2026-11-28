import api from "./axios";

const fetcher = async (url) => {
  const response = await api.get(url);
  return response.data;
};

export default fetcher;
