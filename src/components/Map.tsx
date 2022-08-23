import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

L.popup({
  maxWidth: 300,
  minWidth: 300,
}).setLatLng;

const Map = () => {
  return (
    <MapContainer
      center={[35.6809591, 139.7673068]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6809591, 139.7673068]}>
        <Popup>
          <Image
            src={"https://i.gyazo.com/15cd08eebb62130043f0181eb02e9c47.png"}
            alt={"gazou"}
            width={1000}
            height={1000}
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
