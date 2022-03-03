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
}

export type Favorites = {
	city: string;
	list: Hotel[];
}[]
