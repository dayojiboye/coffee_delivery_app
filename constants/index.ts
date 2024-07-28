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
