"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function StockChart() {
  const [activeTab, setActiveTab] = useState("1 Day");
  const series = [
    {
      name: "Price",
      data: [
        [1715314056815, 62940.2696609694],
        [1715317421102, 62935.8722878058],
        [1715320920068, 62765.3729011503],
        [1715324474483, 63166.6664011365],
        [1715328301821, 63067.1548898661],
        [1715331725244, 63002.4297788449],
        [1715335347409, 63108.8487858934],
        [1715339000450, 62982.4209401701],
        [1715342681935, 63293.9802112634],
        [1715346076408, 63000.2169478931],
        [1715349617801, 63077.5071061762],
        [1715353304488, 61168.275354042],
        [1715356983420, 60904.1022017904],
        [1715360554109, 61096.2896932192],
        [1715364312547, 60380.2791835582],
        [1715367973911, 60728.492559952],
        [1715371650666, 60848.5720063215],
        [1715374981928, 60484.471181131],
        [1715378664299, 60682.9124221555],
        [1715382372137, 60832.766987638],
        [1715385958569, 60789.5675062635],
        [1715389340770, 60773.5499464633],
        [1715393256131, 60860.9722334381],
        [1715396593916, 60870.6918557564],
        [1715400145693, 60705.1042835674],
        [1715403991750, 60775.3603667608],
        [1715407548079, 60913.1749796905],
        [1715411163806, 60954.9312057841],
        [1715414639883, 61040.8585189548],
        [1715418388783, 60848.689096014],
        [1715421699580, 60830.0752396733],
        [1715425245945, 60779.448381933],
        [1715429003866, 60667.3093359156],
        [1715432656124, 60702.5334999328],
        [1715436232016, 60940.4669908477],
        [1715439940531, 60833.802626696],
        [1715443523057, 61158.0412548479],
        [1715446972913, 61133.6382123069],
        [1715450771792, 61094.5235319565],
        [1715454370539, 61201.3466217221],
        [1715457898303, 61111.8454324027],
        [1715461487236, 60980.7457399014],
      ],
    },
  ];

  const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series (Daily)",
      lable: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      lable: "1 Week",
      value: 7,
    },

    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly Time Series",
      lable: "1 Month",
      value: 30,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Yearly Time Series",
      lable: "1 Year",
      value: 365,
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      strokeWidth: 1,
      size: 0,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };


  const handleLabel = (label)=>{
    setActiveTab(label)
  }
  return (
    <div>
      <div className="flex gap-5">
        {timeSeries.map((time, index) => {
          return <Button key={index} variant={activeTab === time.lable ? "default" : "outline"} onClick ={(()=> handleLabel(time.lable))} >{time.lable}</Button>

        })}
      </div>
      <div id="chart-time-line">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={450}
        />
      </div>
    </div>
  );
}

export default StockChart;
