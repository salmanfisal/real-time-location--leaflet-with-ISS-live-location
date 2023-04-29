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

  //   let s=[];
  //   useEffect(() => {

  //     get()
  //     // countries()
  //   }, [setData,setFlag]);
  //   const get = async()=>{
  //    await axios.get(
  //       "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  //     ).then((res) => {
  //      return setData(res.data);
  //     })
  //   }
  //   const {cases,deaths,recovered } = data
  // // const countries = async()=>{
  // //   await axios.get("https://disease.sh/v3/covid-19/countries")
  // //   .then((res)=>setFlag(res.data))
  // // }
  // console.log(data)
  // for(let key in cases){
  //   s.push(`${key} : ${cases[key]}\n`)

  // }
  // console.log(flag)
  // for(let user in deaths){
  //     s.push(`${user}:${deaths[user]}\n`)

  // }

  return (
    <>
      <div>Chart</div>
      <p>{data}</p>
      {/* {
        flag.map((e)=>{
          return <img src ={e.countryInfo.flag} alt ={e.country} />
        })
      } */}
      {/* <button onClick ={countries}>flags</button> */}

      {/* <p>activePerOneMillion: {data.activePerOneMillion}</p>
      <p>activePerOneMillion: {data.activePerOneMillion}</p>
   <p>activePerOneMillion: {data.activePerOneMillion}</p>
   <p>activePerOneMillion: {data.activePerOneMillion}</p>
   <p>activePerOneMillion: {data.activePerOneMillion}</p>

   <p>activePerOneMillion: {data.activePerOneMillion}</p> */}
      {/* <p>{s}</p> */}
    </>
  );
}
export default Chart