import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

export const useFetch = (url) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const options = {
    params: { hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_key,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  const fetchVideos = async () => {
    setLoading((pre) => (pre = true));
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      setLoading((pre) => (pre = false));
      setResults(data);
    } catch (error) {
      console.log(error.response.data);
      setLoading((pre) => (pre = false));
    }
  };

  useEffect(() => {
    if (url) {
      fetchVideos();
    }
  }, [url]);

  return { results, loading };
};
