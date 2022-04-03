import { setRating } from '../../../../store/offer-data/offer-data';
import { useAppDispatch } from './../../../../hooks/useState';

type RatingItemProps = {
  start: number;
};

export default function RatingItem(start: RatingItemProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating" value={`${start.start}`}
        id={`${start.start}-stars`}
        type="radio"
        onChange={() => dispatch(setRating(start.start))}
      />
      <label
        htmlFor={`${start.start}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
