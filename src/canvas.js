import React from "react";
import Chart from "chart.js/auto";
function Canvas() {
  let year = "";
  let temp = "";
  let yearlabels = [];
  let templabels = [];
  const sal = async function () {
    const res = await fetch("data.csv");
    const pars = await res.text();
    const data = pars.split("\n").slice(1);
    data.forEach((e) => {
      const row = e.split(",");
      year = row[0];
      yearlabels.push(year);
      temp = row[1];
      templabels.push(parseFloat(temp) + 14);
    });
    new Chart(document.getElementById("salman"), {
      type: "line",
      data: {
        labels: yearlabels,
        datasets: [
          {
            label: "globl temperature index",
            data: templabels,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
  };
  sal();
  return;
}
export default Canvas;
