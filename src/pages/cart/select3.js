import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Select3(props) {
  let img = "http://localhost/webservice/upload/14001.jpg";

  const [data, setData] = useState([]);

  const [number, setNumber] = useState(props.data.num ? props.data.num : 1);

  function add() {
    let local = JSON.parse(localStorage.getItem("item"));
    let list = [];
    let find = false;

    if (local == null) {
      localStorage.setItem("item", JSON.stringify([{ ...props.data, num: 1 }]));
      setNumber(1);
    } else {
      local.map((i, index) => {
        if (find == false && i.id == props.data.id) {
          local[index].num += 1;
          setNumber(local[index].num);
          find = true;
        }
      });
      if (find == false) {
        local.push({ ...props.data, num: 1 });
        setNumber(1);
      }
      localStorage.setItem("item", JSON.stringify(local));

      //upadate sum
      let temp = 0;
      local.map((l) => {
        temp += l.num * l.price;
      });

      props.setSum(temp);
    }
    document.getElementById("conter").innerText =
      parseInt(document.getElementById("conter").innerText) + 1;
  }
  function delet(e) {
    let local = JSON.parse(localStorage.getItem("item"));
    local.map((item, index) => {
      if (item.id == props.data.id) {
        if (local[index].num > 1) {
          local[index].num -= 1;
          setNumber(local[index].num);
          document.getElementById("conter").innerText =
            parseInt(document.getElementById("conter").innerText) - 1;
        } else {
          local.splice(index, 1);
          document.getElementById("conter").innerText =
            parseInt(document.getElementById("conter").innerText) - 1;
          // e.target.parentElement.parentElement.style.display = 'none';
          //  e.target.parentElement.parentElement.remove()
        }
      }
    });
    localStorage.setItem("item", JSON.stringify(local));
    let temp = 0;
    local.map((l) => {
      temp += l.num * l.price;
    });

    props.setSum(temp);
  }

  return (
    <div>
      {
        <div
          style={{ backgroundColor: "#00FFFF", width: "10px" }}
          onClick={(e) => delet(e)}
        >
          -
        </div>
      }
      {number}
      {
        <div
          style={{ backgroundColor: "#00FFFF", width: "10px" }}
          onClick={add}
        >
          +
        </div>
      }
    </div>
  );
}
