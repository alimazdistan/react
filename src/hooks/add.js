import { useEffect, useState } from "react";
// add to basket
export const add = (props) => {
  let local = JSON.parse(localStorage.getItem("item"));
  let list = [];
  let find = false;

  if (local == null) {
    localStorage.setItem("item", JSON.stringify([{ ...props.data, num: 1 }]));
  } else {
    local.map((i, index) => {
      if (find == false && i.id == props.data.id) {
        local[index].num += 1;
        find = true;
      }
    });
    if (find == false) {
      local.push({ ...props.data, num: 1 });
    }
    alert("added!");
    localStorage.setItem("item", JSON.stringify(local));
  }

  return null;
};
