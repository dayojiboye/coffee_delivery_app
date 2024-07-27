import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
	label: string;
	isSelected: boolean;
	onSelect: (value: string) => void;
};

export default function CategoryPill({ label, isSelected, onSelect }: Props) {
	return (
		<Pressable
			onPress={() => onSelect(label)}
			style={[
				styles.container,
				{ backgroundColor: isSelected ? Colors.light.coffee : Colors.light.iconBg },
			]}
		>
			<Text
				style={[styles.label, { color: isSelected ? Colors.light.white : Colors.light.secondary }]}
			>
				{label}
			</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 6,
		height: 29,
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		fontFamily: "soraSemiBold",
		fontSize: 14,
	},
});
