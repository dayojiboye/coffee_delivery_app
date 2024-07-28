import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import SearchIcon from "@/assets/icons/search.svg";
import FiltersIcon from "@/assets/icons/filters.svg";
import { LinearGradient } from "expo-linear-gradient";
import { categoriesList, coffeeList } from "@/constants";
import CategoryPill from "@/components/category-pill";
import CoffeeCard from "@/components/coffee-card";

export default function Home() {
	const insets = useSafeAreaInsets();
	const [selectedCategory, setSelectedCategory] = React.useState(categoriesList[0]);

	return (
		<ScrollView
			style={styles.container}
			alwaysBounceVertical={false}
			keyboardShouldPersistTaps="handled"
		>
			<StatusBar style="light" />
			<View style={[styles.header, { paddingTop: insets.top }]}>
				<LinearGradient
					colors={["rgba(17, 17, 17, 1)", "rgba(49, 49, 49, 1)"]}
					style={styles.background}
					end={{ x: 0.1, y: 0.8 }}
				/>
				<Pressable style={styles.dropdown}>
					<Text style={styles.dropdownLabel}>Location</Text>
					<View style={styles.dropdownValueContainer}>
						<Text style={styles.dropdownValue}>Bilzen, Tanjungbalai</Text>
						<ChevronDown />
					</View>
				</Pressable>
				<View style={styles.filtersContainer}>
					<View style={styles.searchInputContainer}>
						<View
							style={{
								position: "absolute",
								top: 0,
								left: 16,
								justifyContent: "center",
								alignItems: "center",
								zIndex: 1,
								height: "100%",
							}}
						>
							<SearchIcon />
						</View>
						<TextInput
							style={styles.searchInput}
							placeholderTextColor={Colors.light.border}
							placeholder="Search coffee"
							cursorColor={Colors.light.border}
							selectionColor={Colors.light.border}
						/>
					</View>
					<Pressable style={styles.filterButtons}>
						<FiltersIcon />
					</Pressable>
				</View>
				<Pressable style={styles.banner}>
					<Image
						source={require("../../assets/images/banner.png")}
						resizeMode="cover"
						style={styles.bannerImg}
					/>
				</Pressable>
			</View>

			<View style={styles.contentContainer}>
				<ScrollView
					contentContainerStyle={styles.categories}
					horizontal
					keyboardShouldPersistTaps="handled"
					showsHorizontalScrollIndicator={false}
				>
					{categoriesList.map((category) => (
						<CategoryPill
							key={category}
							label={category}
							isSelected={selectedCategory === category}
							onSelect={(value) => setSelectedCategory(value)}
						/>
					))}
				</ScrollView>
				<View style={styles.coffeeList}>
					{coffeeList.map((coffee) => (
						<CoffeeCard
							key={coffee.id}
							id={coffee.id}
							name={coffee.name}
							category={coffee.category}
							image={coffee.image}
							price={coffee.price}
						/>
					))}
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#1c1d1d",
	},
	header: {
		paddingBottom: 100,
		position: "relative",
	},
	dropdown: {
		gap: 8,
		flexDirection: "column",
		alignSelf: "flex-start",
		paddingHorizontal: 24,
	},
	dropdownLabel: {
		color: Colors.light.border,
		fontSize: 12,
		fontFamily: "sora",
	},
	dropdownValue: {
		color: "#D8D8D8",
		fontSize: 14,
		fontFamily: "soraSemiBold",
	},
	dropdownValueContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	filtersContainer: {
		marginTop: 24,
		flexDirection: "row",
		gap: 16,
		paddingHorizontal: 24,
	},
	searchInputContainer: {
		position: "relative",
		flex: 1,
		backgroundColor: "#2A2A2A",
		borderCurve: "continuous",
		borderRadius: 12,
	},
	searchInput: {
		height: 52,
		backgroundColor: "transparent",
		flex: 1,
		padding: 16,
		paddingLeft: 44,
		color: Colors.light.white,
	},
	filterButtons: {
		backgroundColor: Colors.light.coffee,
		height: 52,
		width: 52,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		borderCurve: "continuous",
	},
	banner: {
		flex: 1,
		height: 140,
		position: "absolute",
		bottom: -68,
		left: 0,
		right: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	bannerImg: {
		flex: 1,
		width: "90%",
		maxWidth: 327,
		borderRadius: 16,
		borderCurve: "continuous",
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		flex: 1,
	},
	contentContainer: {
		paddingVertical: 94,
		gap: 24,
	},
	categories: {
		gap: 16,
		paddingHorizontal: 24,
	},
	coffeeList: {
		flexDirection: "row",
		flexWrap: "wrap",
		rowGap: 15,
		width: "100%",
		paddingHorizontal: 24,
		justifyContent: "space-between",
	},
});
