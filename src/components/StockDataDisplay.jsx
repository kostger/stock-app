import React from "react";

const StockDataDisplay = ({ data }) => {
  return (
    <div style={{ overflow: "scroll", height: "400px", width: "500px" }}>
      <h2>Stock Data</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.values.map((item, index) => (
            <tr key={index}>
              <td>{item.datetime}</td>
              <td>{item.open}</td>
              <td>{item.high}</td>
              <td>{item.low}</td>
              <td>{item.close}</td>
              <td>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDataDisplay;
