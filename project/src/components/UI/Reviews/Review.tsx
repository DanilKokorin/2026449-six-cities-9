import { Сomment } from '../../../types/comment';

type ReviewProps = {
  review: Сomment;
};

export default function Review({ review }: ReviewProps) {
  function getRating(rating: number): number {
    return rating * 20;
  }

  const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRating(review.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{month[new Date(review.date).getMonth()]} {new Date(review.date).getFullYear()}</time>
      </div>
    </li>
  );
}
