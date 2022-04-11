import { Сomment } from '../../../types/comment';

type ReviewProps = {
  review: Сomment;
};

export default function Review({ review }: ReviewProps) {
  function getRating(rating: number): number {
    return rating * 20;
  }

  function getMonthDate(date: string): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[new Date(date).getMonth()];
  }

  function getFullYearDate(date: string): number {
    return new Date(date).getFullYear();
  }

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
        <time
          className="reviews__time"
          dateTime="2019-04-24"
        >
          {getMonthDate(review.date)} {getFullYearDate(review.date)}
        </time>
      </div>
    </li>
  );
}
