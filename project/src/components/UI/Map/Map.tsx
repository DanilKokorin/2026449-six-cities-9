import { useRef, useEffect } from 'react';
import useMap from '../../../hooks/useMap';
import { Hotel } from '../../../types/hotel';
import { City } from '../../../types/typeMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT } from './../../marker';

type MapProps = {
  hotels: Hotel[];
  city: City;
};

export default function Map({ hotels, city }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });


  useEffect(() => {
    if (map) {
      hotels.forEach((hotel) => {
        leaflet
          .marker({
            lat: hotel.lat,
            lng: hotel.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map]);
  return <section className="cities__map map" ref={mapRef}></section>;
}
