import "leaflet/dist/leaflet.css";
import L, { DivOverlay } from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Image from "next/image";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useRecoilState } from "recoil";
import { Card } from "src/components/Card";
import { cardDetailsState } from "src/globalStates/atoms/cardDetailAtom";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const Map = () => {
  const [cardDetails] = useRecoilState(cardDetailsState);

  return (
    <MapContainer
      center={[35.94349566577982, 136.1886840250416]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "800px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cardDetails.map((cardDetail) => {
        return (
          <Marker
            position={[cardDetail.latitude, cardDetail.longitude]}
            key={cardDetail.id}
          >
            <Popup maxWidth={1000}>
              <div style={{ width: "300px" }}>
                <Card
                  id={cardDetail.id}
                  like={cardDetail.like}
                  imgURL={cardDetail.imgURL}
                />
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
