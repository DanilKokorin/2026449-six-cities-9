import LeaveFeedbackRating from './feedback-rating/leave-feedback-rating';
import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useState';
import { AddReview } from '../../../types/addReview';
import { LeaveFeedbackAction } from '../../../store/api-action';

type LeaveFeedbackProps = {
  hotelID: number;
}

export default function LeaveFeedback({ hotelID }: LeaveFeedbackProps) {
  const { rating } = useAppSelector(({OFFER}) => OFFER);
  const [formFeedback, setFormFeedback] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  function setReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(rating && formFeedback.trim().length > 0) {
      addReview({
        hotelID,
        reviewData: {
          rating: rating,
          comment: formFeedback,
        },
      });
    }
  }

  function addReview(review: AddReview) {
    dispatch(LeaveFeedbackAction(review))
      .then(() => {
        setFormFeedback('');
        setError(null);
      })
      .catch((e) => {
        setError(e);
      });
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={setReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <LeaveFeedbackRating />
      <textarea
        value={formFeedback}
        onChange={(event) => setFormFeedback(event.target.value)}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        required
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit" disabled={rating === 0 || !(formFeedback.trim().length >= 50)}
        >
          Submit
        </button>
        {error && <p>ERROR</p>}
      </div>
    </form>
  );
}
