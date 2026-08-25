import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Box } from "@mui/material";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const DefaultIcon = L.icon({ iconUrl, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ onSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng);
    },
  });

  return position ? <Marker position={position}></Marker> : null;
}

const LeafletMap = () => {
  const [location, setLocation] = useState(null);

  return (
    <Box
      sx={{
        height: "400px",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[31.5, 34.47]}
        zoom={20}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onSelect={setLocation} />
      </MapContainer>

      {location && (
        <Box mt={2}>
          📍 Lat: {location.lat.toFixed(4)} | Lng: {location.lng.toFixed(4)}
        </Box>
      )}
    </Box>
  );
};
export default LeafletMap;
