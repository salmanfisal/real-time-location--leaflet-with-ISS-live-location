import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export function Chart() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState([]);

  const nasa = async () => {
    const res = await fetch("data.csv");
    const data = await res.text();
    const split = data.split("\n").slice(1);
    split.forEach((e) => {
      const row = e.split(",");
      console.log(row);
      const year = row[0];
      const temp = row[1];
      console.log(year, temp);
    });
  };
  nasa();

  return (
    <>
      <div>Chart</div>
      <p>{data}</p>
    </>
  );
}
export default Chart;
