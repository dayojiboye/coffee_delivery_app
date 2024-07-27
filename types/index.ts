import { ImageSourcePropType } from "react-native";

export type CategoriesListType = string[];

export type CoffeeType = {
	id: number;
	name: string;
	category: string;
	price: number;
	image: ImageSourcePropType;
};
