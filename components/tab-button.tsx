import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";

export type TabButton = {
	title: string;
	accessibilityLabel: string;
};

type TabButtonsProps = {
	buttons: TabButton[];
	selectedTab: number;
	setSelectedTab: (index: number) => void;
};

export default function TabButtons({ buttons, selectedTab, setSelectedTab }: TabButtonsProps) {
	const [dimensions, setDimensions] = React.useState({ height: 20, width: 100 });

	const buttonWidth = dimensions.width / buttons.length;

	const padding = 10;

	const tabPositionX = useSharedValue(0);

	const onTabbarLayout = (e: LayoutChangeEvent) => {
		setDimensions({
			width: e.nativeEvent.layout.width,
			height: e.nativeEvent.layout.height,
		});
	};

	const handlePressCb = (index: number) => {
		setSelectedTab(index);
	};

	const onTabPress = (index: number) => {
		tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
			runOnJS(handlePressCb)(index);
		});
	};

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: tabPositionX.value }],
		};
	});

	return (
		<View
			// accessibilityRole="tabbar"
			style={styles.tabBar}
		>
			<Animated.View
				style={[
					animatedStyle,
					styles.animatedView,
					{
						height: dimensions.height - padding,
						width: buttonWidth - padding,
					},
				]}
			/>
			<View onLayout={onTabbarLayout} style={styles.tabBarContentContainer}>
				{buttons.map((button, index) => {
					const isSelected = selectedTab === index;

					return (
						<Pressable
							key={index.toString()}
							// accessibilityRole="tab"
							accessibilityLabel={button.accessibilityLabel}
							onPress={() => onTabPress(index)}
							style={styles.tabButton}
						>
							<Text
								style={[
									styles.tabButtonLabel,
									{
										color: isSelected ? Colors.light.white : Colors.light.primary,
										fontFamily: isSelected ? "soraSemiBold" : "sora",
									},
								]}
							>
								{button.title}
							</Text>
						</Pressable>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: Colors.light.tabBg,
		borderRadius: 12,
		borderCurve: "continuous",
		justifyContent: "center",
	},
	animatedView: {
		backgroundColor: Colors.light.coffee,
		position: "absolute",
		borderRadius: 8,
		borderCurve: "continuous",
		marginHorizontal: 4,
	},
	tabBarContentContainer: {
		flexDirection: "row",
	},
	tabButton: {
		flex: 1,
		paddingVertical: 14,
	},
	tabButtonLabel: {
		alignSelf: "center",
		fontSize: 16,
	},
});
