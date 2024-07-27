import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import SearchIcon from "@/assets/icons/search.svg";
import FiltersIcon from "@/assets/icons/filters.svg";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
	const insets = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<View style={[styles.header, { paddingTop: insets.top }]}>
				<LinearGradient
					colors={["rgba(17, 17, 17, 1)", "rgba(49, 49, 49, 1)"]}
					style={styles.background}
					end={{ x: 0.1, y: 0.9 }}
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
							placeholderTextColor="#A2A2A2"
							placeholder="Search coffee"
							cursorColor="#A2A2A2"
							selectionColor="#A2A2A2"
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		// backgroundColor: "#1c1d1d",
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
		color: "#A2A2A2",
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
	},
	searchInput: {
		height: 52,
		backgroundColor: "#2A2A2A",
		flex: 1,
		padding: 16,
		paddingLeft: 44,
		borderRadius: 12,
		color: Colors.light.white,
	},
	filterButtons: {
		backgroundColor: Colors.light.coffee,
		height: 52,
		width: 52,
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
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
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		flex: 1,
	},
});
