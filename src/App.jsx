import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import StatsCards from './components/StatsCards';
import HistoryTable from './components/HistoryTable';
import DistanceChart from './components/DistanceChart';
import DownloadPDF from './components/DownloadPDF';

const App = () => {
  const [gpsData, setGpsData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('/api/history');
    setGpsData(res.data.reverse());
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const calculateDistance = (data) => {
    const R = 6371;
    const toRad = (v) => v * Math.PI / 180;
    let total = 0;

    for (let i = 1; i < data.length; i++) {
      const a = data[i - 1];
      const b = data[i];
      const dLat = toRad(b.latitude - a.latitude);
      const dLon = toRad(b.longitude - a.longitude);
      const aVal = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.latitude)) * Math.cos(toRad(b.latitude)) * Math.sin(dLon / 2) ** 2;
      total += R * 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
    }

    return total.toFixed(2);
  };

  if (!gpsData.length) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Smart Agro Car GPS Tracker</h1>
      <StatsCards gpsData={gpsData} totalDistance={calculateDistance(gpsData)} />
      <MapView gpsData={gpsData} />
      <DistanceChart gpsData={gpsData} />
      <HistoryTable gpsData={gpsData} />
      <DownloadPDF />
    </div>
  );
};

export default App;
