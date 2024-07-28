import { CategoriesListType, CoffeeType } from "@/types";

export const categoriesList: CategoriesListType = ["All Coffee", "Machiato", "Latte", "Americano"];

export const coffeeList: CoffeeType[] = [
	{
		id: 1,
		name: "Caffee Mocha",
		category: "Deep Foam",
		price: 4.53,
		image: require("../assets/images/coffee1.png"),
	},
	{
		id: 2,
		name: "Flat White",
		category: "Expresso",
		price: 3.53,
		image: require("../assets/images/coffee2.png"),
	},
	{
		id: 3,
		name: "Caffee Mocha",
		category: "Deep Foam",
		price: 4.53,
		image: require("../assets/images/coffee3.png"),
	},
	{
		id: 4,
		name: "Flat White",
		category: "Expresso",
		price: 4.53,
		image: require("../assets/images/coffee4.png"),
	},
];

export const Sizes = ["Small", "Medium", "Large"];

export enum OrderTabs {
	Deliver,
	Pickup,
}

export const mapStyle = [
	{
		elementType: "geometry",
		stylers: [
			{
				color: "#f5f5f5",
			},
		],
	},
	{
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off",
			},
		],
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#616161",
			},
		],
	},
	{
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#f5f5f5",
			},
		],
	},
	{
		featureType: "administrative.land_parcel",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#bdbdbd",
			},
		],
	},
	{
		featureType: "poi",
		elementType: "geometry",
		stylers: [
			{
				color: "#eeeeee",
			},
		],
	},
	{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#757575",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
				color: "#e5e5e5",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e",
			},
		],
	},
	{
		featureType: "road",
		elementType: "geometry",
		stylers: [
			{
				color: "#ffffff",
			},
		],
	},
	{
		featureType: "road.arterial",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#757575",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
				color: "#dadada",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#616161",
			},
		],
	},
	{
		featureType: "road.local",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e",
			},
		],
	},
	{
		featureType: "transit.line",
		elementType: "geometry",
		stylers: [
			{
				color: "#e5e5e5",
			},
		],
	},
	{
		featureType: "transit.station",
		elementType: "geometry",
		stylers: [
			{
				color: "#eeeeee",
			},
		],
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#c9c9c9",
			},
		],
	},
	{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9e9e9e",
			},
		],
	},
];
