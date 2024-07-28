import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import HeartIcon from "@/assets/icons/heart-black.svg";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import StarIcon from "@/assets/icons/star.svg";
import { Sizes } from "@/constants";
import SizePill from "@/components/size-pill";
import CustomButton from "@/components/button";

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
					headerStyle: { backgroundColor: Colors.light.background },
					headerLeft: (props) => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 24 }}>
							<ChevronLeft width={18} height={18} />
						</TouchableOpacity>
					),
					headerRight: (props) => (
						<TouchableOpacity style={{ marginRight: 24 }}>
							<HeartIcon width={20} height={20} />
						</TouchableOpacity>
					),
				}}
			/>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
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
							<SizePill
								key={size}
								isSelected={isSelected}
								onSelectSize={(value) => setSelectedSize(value)}
								size={size}
							/>
						);
					})}
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<View>
					<Text style={styles.priceText}>Price</Text>
					<Text style={styles.price}>$ 4.53</Text>
				</View>
				<CustomButton label="Buy Now" style={{ flex: 1, maxWidth: 217 }} onPress={() => {}} />
			</View>
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
		borderCurve: "continuous",
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
		marginTop: 4,
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
		borderCurve: "continuous",
	},
	optionIcon: {
		width: 20,
		height: 20,
	},
	ratingContainer: {
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
	footer: {
		backgroundColor: Colors.light.white,
		paddingTop: 16,
		paddingHorizontal: 24,
		paddingBottom: 46,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		flexDirection: "row",
		gap: 34,
		justifyContent: "space-between",
		alignItems: "center",
	},
	priceText: {
		color: "#909090",
		fontSize: 14,
		fontFamily: "sora",
	},
	price: {
		marginTop: 4,
		fontSize: 18,
		fontFamily: "soraSemiBold",
		color: Colors.light.coffee,
	},
});
