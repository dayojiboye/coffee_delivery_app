import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/button";
import { useRouter } from "expo-router";

export default function HomeScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" translucent />
			<View style={styles.background}>
				<Image
					source={require("../assets/images/coffee-bg.png")}
					resizeMode="cover"
					style={styles.image}
				/>
				<View style={styles.contents}>
					<Text style={styles.headingText}>Fall in Love with Coffee in Blissful Delight!</Text>
					<Text style={styles.description}>
						Welcome to our cozy coffee corner, where every cup is a delightful for you.
					</Text>
					<CustomButton
						label="Get Started"
						style={styles.buttonStyle}
						onPress={() => router.replace("/home")}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.light.black,
	},
	background: {
		flex: 1,
		position: "relative",
	},
	image: {
		width: "100%",
		height: "70%",
		position: "absolute",
	},
	contents: {
		flex: 1,
		justifyContent: "flex-end",
		padding: 24,
	},
	headingText: {
		color: Colors.light.white,
		fontSize: 32,
		textAlign: "center",
		fontFamily: "soraSemiBold",
		lineHeight: 48,
	},
	description: {
		fontSize: 14,
		fontFamily: "sora",
		color: Colors.light.border,
		textAlign: "center",
		lineHeight: 21,
		maxWidth: 327,
		marginTop: 8,
	},
	buttonStyle: {
		marginTop: 48,
	},
});
