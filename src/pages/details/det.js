import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { add } from "../../hooks/add";
import { array } from "yup";
import Select1 from "../home/select";

export default function Det() {
  let img = "http://php.mytest1.ir/";
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    window.scroll(0, 0);
    Axios.get("http://php.mytest1.ir/det.php?id=" + `${id}`).then((res) =>
      setData(res.data)
    );
  }, []);

  let list = [];
  list.push(data);

  return (
    <div className="card">
      <img src={img + `${data.img}`}></img>
      number: {data.id}
      <br></br>
      titel:{data.titel}
      <br></br>
      body:{data.body}
      <br></br>
      peice:{data.price}
      <br></br>
      description:{data.description}
      <Select1 data={data}></Select1>
    </div>
  );
}
