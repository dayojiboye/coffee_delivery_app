import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
	style?: StyleProp<ViewStyle>;
	label: string;
	labelStyle?: StyleProp<TextStyle>;
	onPress: () => void;
};

const CustomButton = ({ style, label, labelStyle, onPress }: Props) => {
	return (
		<Pressable onPress={onPress} style={[styles.button, style]}>
			<Text style={[styles.text, labelStyle]}>{label}</Text>
		</Pressable>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	button: {
		height: 56,
		paddingHorizontal: 20,
		paddingVertical: 16,
		borderRadius: 16,
		backgroundColor: Colors.light.coffee,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: Colors.light.white,
		fontFamily: "soraSemiBold",
		fontSize: 16,
	},
});
