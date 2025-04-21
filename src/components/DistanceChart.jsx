import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const DistanceChart = ({ gpsData }) => {
  const calculateDistances = (data) => {
    const R = 6371;
    const toRad = (value) => value * Math.PI / 180;

    let result = [];
    let total = 0;

    for (let i = 1; i < data.length; i++) {
      const prev = data[i - 1];
      const curr = data[i];

      const dLat = toRad(curr.latitude - prev.latitude);
      const dLon = toRad(curr.longitude - prev.longitude);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(prev.latitude)) *
          Math.cos(toRad(curr.latitude)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c;

      total += d;
      result.push({ timestamp: curr.timestamp.split("T")[0], distance: parseFloat(total.toFixed(2)) });
    }

    return result;
  };

  const data = calculateDistances([...gpsData].reverse());

  return (
    <div className="bg-gray-700 mt-6 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Distance Traveled Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="timestamp" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="distance" stroke="#10b981" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistanceChart;
