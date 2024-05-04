import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../../hooks/add";

export default function Select1(props) {
  return (
    <div key={props.data.id}>
      {
        <div
          style={{ backgroundColor: "#00FFFF", width: "10px" }}
          onClick={() => {
            add(props);
            document.getElementById("conter").innerText =
              parseInt(document.getElementById("conter").innerText) + 1;
          }}
        >
          +
        </div>
      }
    </div>
  );
}
