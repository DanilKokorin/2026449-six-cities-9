import { useRef, useEffect } from 'react';
import useMap from '../../../hooks/useMap';
import { Hotel } from '../../../types/hotel';
// import { Location } from '../../../types/hotel';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT } from '../../../marker';
import { City } from '../../../types/typeMap';

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
            lat: hotel.location.latitude,
            lng: hotel.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map]);
  return <section className="cities__map map" ref={mapRef}></section>;
}
