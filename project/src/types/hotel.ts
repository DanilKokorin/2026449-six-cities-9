export type Hotel = {
	id: number;
	premium: boolean;
	img: {
		src: string;
		alt: string;
	};
	price: string;
	rating: number;
	name: string;
	type: string;
	lat: number,
  lng: number;
}

export type Favorites = {
	city: string;
	list: Hotel[];
}
