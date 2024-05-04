import { Link } from "react-router-dom";
import Select1 from "../home/select";

import Select3 from "./select3";
import { useEffect, useState } from "react";

export default function Mycart() {
  let list = [];
  const [sum, setSum] = useState(0);
  let temp = 0;
  let img = "http://php.mytest1.ir/";

  if (JSON.parse(localStorage.getItem("item")) === null) {
    console.log("nukk");
  } else {
    let e1 = JSON.parse(localStorage.getItem("item"));
    for (let i = 0; i < e1.length; ++i) {
      list.push(e1[i]);
    }

    useEffect(() => {
      mysum();
    }, []);
    const mysum = () => {
      list.map((l) => {
        temp += l.num * l.price;
      });
      setSum(temp);
    };
  }
  return (
    <div className="row">
      {list &&
        list.map((d) => (
          <div className="card" key={d.id}>
            <img src={img + `${d.img}`} />
            peice:{d.price}
            <Link to={`/det/${d.id}`}>more</Link>
            <Select3 data={d} setSum={setSum}></Select3>
          </div>
        ))}
      <di className="sum"> sum:{sum}</di>
    </div>
  );
}
