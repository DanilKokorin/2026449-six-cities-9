import { useRef, useEffect } from 'react';
import useMap from '../../../hooks/useMap';
import { Hotel } from '../../../types/hotel';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../../marker';
import { City } from '../../../types/typeMap';

type MapProps = {
  hotels: Hotel[];
  city: City;
  className: string;
  selectedPoint: Hotel;
};

export default function Map({ hotels, city, className, selectedPoint }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      hotels.forEach((hotel) => {
        leaflet
          .marker({
            lat: hotel.location.latitude,
            lng: hotel.location.longitude,
          }, {
            icon: selectedPoint.id !== undefined && hotel.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });

      map.flyTo([city.latitude, city.longitude], city.zoom);
    }

    return () => {
      markers.clearLayers();
    };
  }, [city.latitude, city.longitude, city.zoom, currentCustomIcon, defaultCustomIcon, hotels, map, selectedPoint.id]);
  return <section className={className} ref={mapRef}></section>;
}
