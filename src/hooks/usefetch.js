import Axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  //let url= 'http://php.mytest1.ir/'

  let url = "http://php.mytest1.ir/";
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoding(true);
      try {
        let res = await Axios.get(url);

        let data1 = await res.data;

        setLoding(false);
        setData(data1);
      } catch (err) {
        setError(true);
        setLoding(false);
      }
    };
    load();
  }, {});

  return { data, loading, error };
};
