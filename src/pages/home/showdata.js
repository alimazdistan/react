import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select1 from "./select";

export default function ShowData(props) {
  const [page, setPage] = useState(0);
  let img = "http://php.mytest1.ir/";

  const { data } = props;
  let l = [];
  let b =
    (props.data.length / 12) % 12 == 0
      ? props.data.length / 12
      : props.data.length / 12 + 1;
  for (let i = 1; i <= b; ++i) {
    l[i] = i;
  }
  //show data -------------------------------------------------------------------
  return (
    <div className="row">
      {data &&
        data.slice(page * 12, page * 12 + 12).map((d) => (
          <div className="card" key={d.id}>
            <img src={img + `${d.img}`} />
            {d.titel}
            <br></br>price:{d.price}
            <br></br>
            <Link to={`/det/${d.id}`}>...more</Link>
            <Select1 data={d}></Select1>
          </div>
        ))}

      <ul style={{ color: "blue", listStyle: "none" }} className="sum">
        {l.map((A, index) => (
          <li
            key={index}
            onClick={() => {
              setPage(index - 1);
              window.scroll(0, 0);
            }}
            style={{ marginRight: "15px" }}
          >
            {A}
          </li>
        ))}
      </ul>
    </div>
  );
}
