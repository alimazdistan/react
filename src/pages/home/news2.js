import Axios from "axios";
import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Select1 from "./select";

import { useFetch } from "../../hooks/usefetch";
import ShowData from "./showdata";

export default function News2() {
  let { data, loading, error } = useFetch();
  return (
    <div>
      {error && <h1>not found.....</h1>}
      {loading && <h1>loading.....</h1>}
      {data && <ShowData data={data}></ShowData>}
    </div>
  );
}
