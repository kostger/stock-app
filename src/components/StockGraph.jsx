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
    <div className="p-4 z-0">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Stock Price Graph
      </h2>
      <ResponsiveContainer minHeight={300} width="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip labelStyle={{ color: "black" }} />
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
