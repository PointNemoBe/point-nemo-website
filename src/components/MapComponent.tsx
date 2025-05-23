
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  // Coordinates for Nivelles, Belgium
  const nivellesPosition: [number, number] = [50.5982, 4.3282];

  return (
    <MapContainer
      center={nivellesPosition}
      zoom={12}
      className="h-64 w-full rounded-lg"
      style={{ minHeight: '256px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={nivellesPosition}>
        <Popup>
          <div className="text-center">
            <strong>Zone d'activités Point Nemo</strong>
            <br />
            Nivelles et environs
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
