import { Empty } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ data }) {
  if (!data?.length) return <Empty description="Нет данных" />;

  const markers = data.filter(i => i.lat && i.lng);
  if (!markers.length) return <Empty description="Нет координат" />;

  const center = [markers[0].lat, markers[0].lng];

  return (
    <MapContainer center={center} zoom={12} style={{ height: 400, width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map(item => (
        <Marker key={item.id} position={[item.lat, item.lng]}>
          <Popup>
            <b>{item.category}</b><br />
            {item.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
