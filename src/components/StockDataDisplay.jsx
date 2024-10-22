import React from "react";

const StockDataDisplay = ({ data }) => {
  return (
    <div className="overflow-x-auto max-w-full">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">Date</th>
            <th className="border border-gray-300 p-2 text-left">Close</th>
            <th className="border border-gray-300 p-2 text-left">Open</th>
            <th className="border border-gray-300 p-2 text-left">High</th>
            <th className="border border-gray-300 p-2 text-left">Low</th>

            <th className="border border-gray-300 p-2 text-left">Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.values.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{item.datetime}</td>
              <td
                className={`border border-gray-300 p-2 ${
                  item.close > item.open ? "text-green-500" : "text-red-500"
                }`}
              >
                {parseFloat(item.close).toFixed(4)}
              </td>
              <td className="border border-gray-300 p-2">
                {parseFloat(item.open).toFixed(4)}
              </td>
              <td className="border border-gray-300 p-2">
                {parseFloat(item.high).toFixed(4)}
              </td>
              <td className="border border-gray-300 p-2">
                {parseFloat(item.low).toFixed(4)}
              </td>

              <td className="border border-gray-300 p-2">{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDataDisplay;
