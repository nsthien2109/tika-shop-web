import React from "react";
import Chart from "react-apexcharts";

const ChartDashboard = () => {
  var options = {
    chart: {
      id: "basic-bar",
    },
  };

  var series = [
    {
      name: "Users",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "Stores",
      data: [70, 30, 49, 40, 99, 20, 60, 21],
    },
  ];
  return (
    <>
      <div className="hidden chart-dashboard card md:block">
        <Chart options={options} series={series} type="area" width="100%" />
      </div>
    </>
  );
};

export default ChartDashboard;
