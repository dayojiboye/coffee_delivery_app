import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";

import HomeIcon from "@/assets/icons/home-active.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import BagIcon from "@/assets/icons/bag.svg";
import BellIcon from "@/assets/icons/bell.svg";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors["light"].tint,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					paddingBottom: 0,
				},
				tabBarItemStyle: {
					paddingVertical: 26,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => <TabBarIcon icon={HomeIcon} isFocused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="favorites"
				options={{
					title: "Favorites",
					tabBarIcon: ({ color, focused }) => <TabBarIcon icon={HeartIcon} isFocused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="cart"
				options={{
					title: "Cart",
					tabBarIcon: ({ color, focused }) => <TabBarIcon icon={BagIcon} isFocused={focused} />,
				}}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					title: "Notifications",
					tabBarIcon: ({ color, focused }) => <TabBarIcon icon={BellIcon} isFocused={focused} />,
				}}
			/>
		</Tabs>
	);
}
