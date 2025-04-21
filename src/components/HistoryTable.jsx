import React from 'react';

const HistoryTable = ({ gpsData }) => {
  return (
    <div className="overflow-x-auto bg-gray-800 text-white p-4 rounded-lg mt-4">
      <h2 className="text-lg mb-2">Location History</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Latitude</th>
            <th className="px-4 py-2">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {gpsData.map((point, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{point.timestamp}</td>
              <td className="border px-4 py-2">{point.latitude}</td>
              <td className="border px-4 py-2">{point.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
