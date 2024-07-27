import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import HeartIcon from "@/assets/icons/heart-black.svg";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import StarIcon from "@/assets/icons/star.svg";
import { Sizes } from "@/constants";

export default function Product() {
	const router = useRouter();
	const [selectedSize, setSelectedSize] = React.useState(Sizes[1]);

	return (
		<>
			<StatusBar style="dark" />
			<Stack.Screen
				options={{
					headerShown: true,
					title: "Detail",
					headerTitleAlign: "center",
					headerTitleStyle: styles.headerTitle,
					headerShadowVisible: false,
					headerLeft: (props) => (
						<TouchableOpacity onPress={() => router.back()}>
							<ChevronLeft width={18} height={18} />
						</TouchableOpacity>
					),
					headerRight: (props) => (
						<TouchableOpacity>
							<HeartIcon width={20} height={20} />
						</TouchableOpacity>
					),
				}}
			/>
			<ScrollView
				style={{ flex: 1, backgroundColor: Colors.light.white }}
				contentContainerStyle={styles.container}
			>
				<Image
					source={require("../../assets/images/coffee1-large.png")}
					style={styles.image}
					resizeMode="cover"
				/>
				<View style={styles.options}>
					<View>
						<Text style={styles.name}>Caffe Mocha</Text>
						<Text style={styles.warmth}>Ice/Hot</Text>
					</View>
					<View style={styles.optionActions}>
						<TouchableOpacity style={styles.option}>
							<Image
								source={require("../../assets/images/motobike.png")}
								style={styles.optionIcon}
								resizeMode="cover"
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option}>
							<Image
								source={require("../../assets/images/coffee-bean.png")}
								style={styles.optionIcon}
								resizeMode="cover"
							/>
						</TouchableOpacity>
						<TouchableOpacity style={styles.option}>
							<Image
								source={require("../../assets/images/extra-milk.png")}
								style={styles.optionIcon}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.ratingContainer}>
					<StarIcon width={20} height={20} />
					<Text style={styles.rating}>
						4.8 <Text style={styles.ratingCount}>(230)</Text>
					</Text>
				</View>
				<View style={styles.divider} />
				<Text style={styles.headingText}>Description</Text>
				<Text style={styles.description}>
					A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and
					85ml of fresh milk the fo.. <Text style={styles.readMoreButton}>Read More</Text>
				</Text>
				<Text style={[styles.headingText, { marginTop: 24 }]}>Size</Text>
				<View style={styles.sizes}>
					{Sizes.map((size) => {
						const isSelected = selectedSize === size;

						return (
							<Pressable
								key={size}
								onPress={() => setSelectedSize(size)}
								style={[
									styles.size,
									{
										backgroundColor: isSelected ? "#F9F2ED" : Colors.light.white,
										borderColor: isSelected ? Colors.light.coffee : "#E3E3E3",
									},
								]}
							>
								<Text
									style={[
										styles.sizeText,
										{ color: isSelected ? Colors.light.coffee : Colors.light.primary },
									]}
								>
									{size[0].toUpperCase()}
								</Text>
							</Pressable>
						);
					})}
				</View>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		color: Colors.light.primary,
		fontSize: 16,
		fontFamily: "soraSemiBold",
	},
	container: {
		flex: 1,
		padding: 24,
	},
	image: {
		width: "100%",
		height: 202,
		borderRadius: 16,
	},
	name: {
		fontSize: 20,
		fontFamily: "soraSemiBold",
		color: Colors.light.primary,
	},
	options: {
		marginTop: 16,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	warmth: {
		fontSize: 12,
		fontFamily: "sora",
		color: "#A2A2A2",
	},
	optionActions: {
		flexDirection: "row",
		gap: 12,
		marginTop: 12,
	},
	option: {
		backgroundColor: Colors.light.iconBg,
		padding: 16,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		width: 44,
		height: 44,
	},
	optionIcon: {
		width: 20,
		height: 20,
	},
	ratingContainer: {
		marginTop: 8,
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
	},
	rating: {
		fontSize: 16,
		fontFamily: "soraSemiBold",
		color: Colors.light.primary,
	},
	ratingCount: {
		fontSize: 12,
		fontFamily: "sora",
		color: "#A2A2A2",
	},
	divider: {
		backgroundColor: "#E3E3E3",
		height: 1,
		marginVertical: 16,
		maxWidth: 295,
		alignSelf: "center",
		width: "90%",
	},
	headingText: {
		color: Colors.light.primary,
		fontSize: 16,
		fontFamily: "soraSemiBold",
	},
	description: {
		marginTop: 8,
		color: "#A2A2A2",
		fontFamily: "soraLight",
		fontSize: 14,
		lineHeight: 21,
	},
	readMoreButton: {
		color: Colors.light.coffee,
		fontFamily: "soraSemiBold",
	},
	sizes: {
		marginTop: 16,
		flexDirection: "row",
		gap: 16,
	},
	size: {
		width: 96,
		height: 41,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 12,
	},
	sizeText: {
		fontFamily: "sora",
		fontSize: 14,
	},
});
