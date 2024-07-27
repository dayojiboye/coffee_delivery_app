import { CategoriesListType, CoffeeType } from "@/types";

export const categoriesList: CategoriesListType = ["All Coffee", "Machiato", "Latte", "Americano"];

export const coffeeList: CoffeeType[] = [
	{
		name: "Caffee Mocha",
		category: "Deep Foam",
		price: 4.53,
		image: require("../assets/images/coffee1.png"),
	},
	{
		name: "Flat White",
		category: "Expresso",
		price: 3.53,
		image: require("../assets/images/coffee2.png"),
	},
	{
		name: "Caffee Mocha",
		category: "Deep Foam",
		price: 4.53,
		image: require("../assets/images/coffee3.png"),
	},
	{
		name: "Flat White",
		category: "Expresso",
		price: 4.53,
		image: require("../assets/images/coffee4.png"),
	},
];
