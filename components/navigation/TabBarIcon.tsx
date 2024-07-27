// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
	icon: React.ElementType;
	isFocused: boolean;
};

export function TabBarIcon({ icon, isFocused }: Props) {
	const Icon = icon;

	return (
		<View style={styles.icon}>
			<Icon size={28} />
			<View
				style={[
					styles.activeDot,
					{ backgroundColor: isFocused ? Colors.light.coffee : "transparent" },
				]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		gap: 6,
		alignItems: "center",
	},
	activeDot: {
		width: 10,
		height: 5,
		borderRadius: 8,
	},
});
