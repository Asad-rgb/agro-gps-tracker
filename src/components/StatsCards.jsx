import React from 'react';

const StatsCards = ({ gpsData, totalDistance }) => {
  const latest = gpsData[0];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-400">Latitude</h3>
        <p className="text-xl">{latest.latitude}</p>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-400">Longitude</h3>
        <p className="text-xl">{latest.longitude}</p>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-400">Distance (km)</h3>
        <p className="text-xl">{totalDistance}</p>
      </div>
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <h3 className="text-sm text-gray-400">Data Points</h3>
        <p className="text-xl">{gpsData.length}</p>
      </div>
    </div>
  );
};

export default StatsCards;
