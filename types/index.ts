import { ImageSourcePropType } from "react-native";

export type CategoriesListType = string[];

export type CoffeeType = {
	name: string;
	category: string;
	price: number;
	image: ImageSourcePropType;
};
