import { Image, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { CoffeeType } from "@/types";
import { Colors } from "@/constants/Colors";
import StarIcon from "@/assets/icons/star.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import { useRouter } from "expo-router";

type Props = CoffeeType & {
	style?: StyleProp<ViewStyle>;
};

export default function CoffeeCard({ name, category, price, image, style, id }: Props) {
	const router = useRouter();

	return (
		<Pressable style={[styles.container, style]} onPress={() => router.push(`/product/${name}`)}>
			<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} />
				<View style={styles.ratingContainer}>
					<StarIcon />
					<Text style={styles.rating}>4.8</Text>
				</View>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.category}>{category}</Text>
				<View style={styles.footer}>
					<Text style={styles.price}>$ {price}</Text>
					<Pressable style={styles.addButton}>
						<PlusIcon />
					</Pressable>
				</View>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingTop: 8,
		paddingBottom: 12,
		backgroundColor: Colors.light.white,
		borderRadius: 16,
		width: "47.5%",
		borderCurve: "continuous",
	},
	imageContainer: {
		width: "100%",
		height: 128,
		position: "relative",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 12,
		borderCurve: "continuous",
	},
	ratingContainer: {
		position: "absolute",
		right: 0,
		top: 0,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderTopRightRadius: 12,
		borderBottomLeftRadius: 24,
		width: 51,
		padding: 8,
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
		borderCurve: "continuous",
	},
	rating: {
		color: Colors.light.white,
		fontSize: 8,
		fontFamily: "soraSemiBold",
	},
	contentContainer: {
		marginTop: 8,
	},
	name: {
		color: Colors.light.primary,
		fontFamily: "soraSemiBold",
		fontSize: 16,
	},
	category: {
		marginTop: 4,
		color: "#A2A2A2",
		fontFamily: "sora",
		fontSize: 12,
	},
	footer: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	price: {
		color: "#050505",
		fontFamily: "soraSemiBold",
		fontSize: 18,
	},
	addButton: {
		width: 32,
		height: 32,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.light.coffee,
		padding: 8,
		borderRadius: 8,
		borderCurve: "continuous",
	},
});
