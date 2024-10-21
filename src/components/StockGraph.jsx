import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const StockGraph = ({ data }) => {
  // Convert string values to numbers for the graph
  const formattedData = data.values.map((item) => ({
    date: item.datetime,
    close: parseFloat(item.close),
  }));

  return (
    <div>
      <h2>Stock Price Graph</h2>
      <ResponsiveContainer minHeight={400} minWidth={1000}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
