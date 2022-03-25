export type Hotel = {
	id: number,
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string
};

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type City = {
  location: Location,
  name: string,
}

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}
