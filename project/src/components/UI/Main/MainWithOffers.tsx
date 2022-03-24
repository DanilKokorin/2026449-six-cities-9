import { Hotel } from '../../../types/hotel';
import { City } from '../../../types/typeMap';
import Map from '../Map/Map';
import CardHotel from '../Сard/СardHotel';
import { cities } from './../../../mocks/cities';

type MainWithOffersProps = {
  suggestions: Hotel[];
  city: string;
};

export default function MainWithOffers({suggestions, city}: MainWithOffersProps) {
  const location: City = cities.filter((item) => item.title === city)[0];

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{suggestions.length} places to stay in {city}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by&nbsp;</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {suggestions.map((suggestion) =>
            <CardHotel {...suggestion} key={suggestion.id} />,
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <Map city={location} hotels={suggestions} />
      </div>
    </div>
  );
}
