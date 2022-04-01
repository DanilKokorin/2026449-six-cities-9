export type AddReview = {
  hotelID: number;
  reviewData: reviewData;
}


export type reviewData = {
  rating: number;
  comment: string;
}
