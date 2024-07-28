import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import { OrderTabs } from "@/constants";
import TabButtons, { TabButton } from "@/components/tab-button";

export default function OrderScreen() {
	const router = useRouter();
	const { name } = useLocalSearchParams();
	const [currentTab, setCurrentTab] = React.useState(OrderTabs.Deliver);

	const buttons: TabButton[] = [
		{
			title: "Deliver",
			accessibilityLabel: "Deliver to doorstep",
		},
		{
			title: "Pick Up",
			accessibilityLabel: "Pick up at nearest location",
		},
	];

	return (
		<>
			<StatusBar style="dark" />
			<Stack.Screen
				options={{
					headerShown: true,
					title: "Order",
					headerTitleAlign: "center",
					headerTitleStyle: styles.headerTitle,
					headerShadowVisible: false,
					headerStyle: { backgroundColor: Colors.light.background },
					headerLeft: (props) => (
						<TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 24 }}>
							<ChevronLeft width={18} height={18} />
						</TouchableOpacity>
					),
				}}
			/>
			<View style={{ paddingHorizontal: 24, marginTop: 24 }}>
				<TabButtons buttons={buttons} selectedTab={currentTab} setSelectedTab={setCurrentTab} />
			</View>
			{/* <View style={styles.tabView}></View> */}
		</>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		color: Colors.light.primary,
		fontSize: 16,
		fontFamily: "soraSemiBold",
	},
	tabView: {
		marginTop: 24,
	},
});
