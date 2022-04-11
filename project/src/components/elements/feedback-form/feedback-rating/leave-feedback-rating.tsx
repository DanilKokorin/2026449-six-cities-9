import { STARS_NUMBER } from '../../../../const';
import RatingItem from './rating-item';

export default function LeaveFeedbackRating() {
  const starts = Array(STARS_NUMBER).fill(null).map((item, index) => index + 1);

  return (
    <div className="reviews__rating-form form__rating">
      {starts.map((start, index) => <RatingItem start={5 - index} key={start} />)}
    </div>
  );
}
