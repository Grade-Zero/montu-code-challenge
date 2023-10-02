import axios from "axios";
import { ResultModel } from "./types";

const GIPHY_API_BASE = 'https://api.giphy.com/v1/gifs/';

const QUERY_LIMIT = 20;

const giphyFetchTrending = async (offset?: number): Promise<ResultModel> => { 
  if (!import.meta.env.VITE_GIPHY_API_KEY) {
    throw new Error('Required API key not found in env file');
  }

  const { data } = await axios.get(`${GIPHY_API_BASE}trending`, {
    params: {
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      limit: QUERY_LIMIT,
      offset: offset || 0,
    },
  });

  return data;
}

const giphySearch = async (q: string): Promise<ResultModel> => {
  if (!import.meta.env.VITE_GIPHY_API_KEY) {
    throw new Error('Required API key not found in env file');
  }

  const { data } = await axios.get(`${GIPHY_API_BASE}search`, {
    params: {
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      q: q,
    },
  });

  return data;
}

export {
  giphyFetchTrending,
  giphySearch,
  QUERY_LIMIT,
};