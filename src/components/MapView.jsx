import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ gpsData }) => {
  const latest = gpsData[0];
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-lg mb-2">Live GPS Location</h2>
      <MapContainer
        center={[latest.latitude, latest.longitude]}
        zoom={15}
        style={{ height: '400px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latest.latitude, latest.longitude]}>
          <Popup>
            Latitude: {latest.latitude} <br />
            Longitude: {latest.longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
