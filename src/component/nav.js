import { useContext, useState } from "react";
import { loginpro } from "../App";
import { Link } from "react-router-dom";

export default function Nav(props) {
  let number = 0;
  const item = JSON.parse(localStorage.getItem("item"));
  item?.map((m) => (number += m.num));

  return (
    <div>
      <Link to={"/mycart"}>
        <button>
          Einkaufswagen
          <div id="conter">{number}</div>
        </button>
      </Link>
      <Link to={"/"}>
        <button style={{ float: "left", margin: "5px", height: "35px" }}>
          home
        </button>
      </Link>
      <Link to={"/form"}>
        <button style={{ float: "left", margin: "5px", height: "35px" }}>
          insert
        </button>
      </Link>
    </div>
  );
}
