import { Favorites } from '../types/hotel';

export const favorites:Favorites[] = [
  {
    city: 'Amsterdam',
    list: [
      {
        id: 1,
        premium: true,
        img: {
          src: 'img/apartment-01.jpg',
          alt: 'Place image',
        },
        price: '120',
        rating: 4,
        name: 'Beautiful &amp; luxurious apartment at great location',
        type: 'Apartment',
      },
    ],
  },
  {
    city: 'Paris',
    list: [
      {
        id: 1,
        premium: true,
        img: {
          src: 'img/apartment-01.jpg',
          alt: 'Place image',
        },
        price: '120',
        rating: 4,
        name: 'Beautiful &amp; luxurious apartment at great location',
        type: 'Apartment',
      },
      {
        id: 2,
        premium: false,
        img: {
          src: 'img/room.jpg',
          alt: 'Place image',
        },
        price: '80',
        rating: 4,
        name: 'Wood and stone place',
        type: 'Private room',
      },
      {
        id: 3,
        premium: false,
        img: {
          src: 'img/apartment-02.jpg',
          alt: 'Place image',
        },
        price: '132',
        rating: 4,
        name: 'Canal View Prinsengracht',
        type: 'Apartment',
      },
      {
        id: 4,
        premium: true,
        img: {
          src: 'img/apartment-03.jpg',
          alt: 'Place image',
        },
        price: '180',
        rating: 5,
        name: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
      },
    ],
  },
  {
    city: 'Hamburg',
    list: [
      {
        id: 1,
        premium: true,
        img: {
          src: 'img/apartment-01.jpg',
          alt: 'Place image',
        },
        price: '120',
        rating: 4,
        name: 'Beautiful &amp; luxurious apartment at great location',
        type: 'Apartment',
      },
      {
        id: 2,
        premium: false,
        img: {
          src: 'img/room.jpg',
          alt: 'Place image',
        },
        price: '80',
        rating: 4,
        name: 'Wood and stone place',
        type: 'Private room',
      },
      {
        id: 3,
        premium: false,
        img: {
          src: 'img/apartment-02.jpg',
          alt: 'Place image',
        },
        price: '132',
        rating: 4,
        name: 'Canal View Prinsengracht',
        type: 'Apartment',
      },
    ],
  },
  {
    city: 'Cologne',
    list: [
      {
        id: 1,
        premium: true,
        img: {
          src: 'img/apartment-01.jpg',
          alt: 'Place image',
        },
        price: '120',
        rating: 4,
        name: 'Beautiful &amp; luxurious apartment at great location',
        type: 'Apartment',
      },
      {
        id: 2,
        premium: false,
        img: {
          src: 'img/room.jpg',
          alt: 'Place image',
        },
        price: '80',
        rating: 4,
        name: 'Wood and stone place',
        type: 'Private room',
      },
    ],
  },
];
