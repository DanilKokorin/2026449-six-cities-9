import { Hotel } from '../../../types/hotel';
import { City } from '../../../types/typeMap';
import Map from '../Map/Map';
import Sorting from '../Sorting/Sorting';
import CardHotel from '../Сard/СardHotel';
import { useState, useEffect } from 'react';

type MainWithOffersProps = {
  hotels: Hotel[];
  city: string;
};

export default function MainWithOffers({ hotels, city }: MainWithOffersProps) {
  const offer = hotels.filter((hotel) => hotel.city.name === city)[0];
  const location: City = offer.city.location;
  const [sortedHotels, setSortedHotels] = useState(hotels);
  const [chosenHotel, setChosenHotel] = useState(hotels[0]);

  useEffect(() => {
    setSortedHotels(hotels);
  }, [hotels]);

  function sortedPost(sort: string) {
    switch (sort) {
      case 'Price: low to high':
        setSortedHotels([...hotels].sort((a, b) =>
          a.price - b.price,
        ));
        break;

      case 'Price: high to low':
        setSortedHotels([...hotels].sort((a, b) =>
          a.price - b.price,
        ).reverse());
        break;

      case 'Top rated first':
        setSortedHotels([...hotels].sort((a, b) =>
          a.rating - b.rating,
        ).reverse());
        break;

      case 'Popular':
        return setSortedHotels(hotels);
    }
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{hotels.length} places to stay in {city}</b>
        <Sorting getTitle={sortedPost} />
        <div className="cities__places-list places__list tabs__content">
          {sortedHotels.map((sortedHotel) =>
            <CardHotel setChosenHotel={setChosenHotel} sortedHotel={sortedHotel} key={sortedHotel.id} />,
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <Map className="cities__map map" selectedPoint={chosenHotel} city={location} hotels={hotels} />
      </div>
    </div>
  );
}
