import { SORTING_OPTIONS } from '../../../const';
import { useState } from 'react';


export default function Sorting({getTitle}: {getTitle: (title: string) => void}) {
  const [isOpen, setOpen] = useState(false);
  const [isTitle, setTitle] = useState('Popular');

  function getSotedTitles(title: string) {
    setTitle(title);
    setOpen(false);
    getTitle(title);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpen(!isOpen)}>
        {isTitle}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isOpen ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        {SORTING_OPTIONS.map((item) => <li key={item} onClick={() => getSotedTitles(item)} className={`places__option ${item === isTitle && 'places__option--active'}`} tabIndex={0}>{item}</li>)}
      </ul>
    </form>
  );
}
