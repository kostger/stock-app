import React from "react";

function GraphData() {
  const data = [
    { name: "S&P Futures", value: 5885.25, change: -7.25, percent: -0.12 },
    { name: "Dow Futures", value: 43021.0, change: -148.0, percent: -0.34 },
    { name: "Nasdaq Futures", value: 20496.75, change: -45.25, percent: -0.22 },
    { name: "Russell 2000", value: 2238.7, change: -7.7, percent: -0.34 },
    { name: "Crude Oil", value: 71.09, change: -0.65, percent: -0.91 },
    { name: "Gold", value: 2771.2, change: 11.3, percent: 0.41 },
  ];

  return (
    <div className="grid grid-cols-3 gap-4  h-full p-4 w-full px-2 md:w-1/2">
      {data.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg p-3 shadow-md flex flex-col items-center justify-start"
        >
          <h2 className="text-blue-700 font-bold">{item.name}</h2>
          <p className="text-gray-800">{item.value.toFixed(2)}</p>
          <p
            className={`${item.change < 0 ? "text-red-500" : "text-green-500"}`}
          >
            {item.change.toFixed(2)} ({item.percent.toFixed(2)}%)
          </p>
        </div>
      ))}
    </div>
  );
}

export default GraphData;
