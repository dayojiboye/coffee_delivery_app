import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
	size: string;
	isSelected: boolean;
	onSelectSize: (size: string) => void;
};

export default function SizePill({ size, isSelected, onSelectSize }: Props) {
	return (
		<Pressable
			onPress={() => onSelectSize(size)}
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
}

const styles = StyleSheet.create({
	size: {
		width: 96,
		height: 41,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 12,
		borderCurve: "continuous",
	},
	sizeText: {
		fontFamily: "sora",
		fontSize: 14,
	},
});
