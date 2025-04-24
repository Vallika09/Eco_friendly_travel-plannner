import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import StopsOptions from "./StopsOptions";

const RouteResult = ({ path, routePoints, stops, onStopSelect }) => {
  if (!path || path.length === 0) return null;

  // Center the map on the first route point
  const center = routePoints?.length ? [routePoints[0].lat, routePoints[0].lng] : [20.5937, 78.9629];

  // Custom icon for stops
  const customStopIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [25, 25],
  });

  return (
    <div className="route-result" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      
      {/* Map Section */}
      <div style={{ flex: 3 }}>
        <MapContainer center={center} zoom={5} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Route Line */}
          <Polyline
            positions={routePoints.map(point => [point.lat, point.lng])}
            color="blue"
          />

          {/* Route Points */}
          {routePoints.map((point, i) => (
            <Marker key={i} position={[point.lat, point.lng]}>
              <Popup>{point.name}</Popup>
            </Marker>
          ))}

          {/* Stops */}
          {stops?.map((stop, i) => (
            <Marker key={`stop-${i}`} position={[stop.lat, stop.lng]} icon={customStopIcon}>
              <Popup>
                <strong>{stop.name}</strong><br />
                Type: {stop.type}<br />
                Distance: {stop.distance} km
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Stops Options Sidebar */}
      <div style={{
        flex: 1,
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '4px',
        height: 'fit-content'
      }}>
        <StopsOptions onStopSelect={onStopSelect} />
      </div>
    </div>
  );
};

export default RouteResult;
