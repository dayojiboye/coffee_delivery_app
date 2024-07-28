import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack, useRouter } from "expo-router";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import { Colors } from "@/constants/Colors";
import GpsIcon from "@/assets/icons/gps.svg";
import MapView from "react-native-maps";
import { mapStyle } from "@/constants";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import PhoneIcon from "@/assets/icons/phone.svg";

export default function Tracking() {
	const router = useRouter();
	const bottomSheetRef = React.useRef<BottomSheet>(null);

	return (
		<>
			<StatusBar style="dark" translucent />
			<Stack.Screen
				options={{
					headerTitle: (props) => <></>,
					headerShown: true,
					headerShadowVisible: false,
					headerTransparent: true,
					headerLeft: (props) => (
						<TouchableOpacity
							onPress={() => router.back()}
							style={[styles.navButton, { marginLeft: 12 }]}
						>
							<ChevronLeft width={18} height={18} />
						</TouchableOpacity>
					),
					headerRight: (props) => (
						<TouchableOpacity style={[styles.navButton, { marginRight: 12 }]}>
							<GpsIcon width={24} height={24} />
						</TouchableOpacity>
					),
				}}
			/>
			<View style={styles.container}>
				<MapView
					style={styles.map}
					loadingIndicatorColor={Colors.light.coffee}
					showsTraffic
					customMapStyle={mapStyle}
					// provider={PROVIDER_GOOGLE}
				/>
				<BottomSheet
					ref={bottomSheetRef}
					snapPoints={[322]}
					enableHandlePanningGesture={false}
					handleIndicatorStyle={styles.bottomSheetHandle}
					style={{ paddingTop: 8 }}
					enableOverDrag={false}
					backgroundStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
				>
					<BottomSheetScrollView
						contentContainerStyle={styles.contentContainer}
						alwaysBounceVertical={false}
					>
						<Text style={styles.timeLeft}>10 minutes left</Text>
						<Text style={styles.deliveryInfoText}>
							Delivery to{" "}
							<Text style={{ fontFamily: "soraSemiBold", color: Colors.light.primary }}>
								Jl. Kpg Sutoyo
							</Text>
						</Text>
						<View style={styles.progressView}>
							<View style={styles.progressBar} />
							<View style={styles.progressBar} />
							<View style={styles.progressBar} />
							<View style={[styles.progressBar, { backgroundColor: "#E3E3E3" }]} />
						</View>
						<View style={styles.deliveryMessageView}>
							<View style={styles.motorbikeIconView}>
								<Image
									source={require("../assets/images/motobike.png")}
									style={styles.motorbikeIcon}
									resizeMode="cover"
								/>
							</View>
							<View style={{ flexShrink: 1, gap: 4 }}>
								<Text style={styles.deliveryMessageHeading}>Delivered your order</Text>
								<Text style={styles.deliveryMessage}>
									We will deliver your goods to you in the shortest possible time.
								</Text>
							</View>
						</View>
						<View style={styles.riderView}>
							<TouchableOpacity style={styles.riderProfileButton}>
								<Image
									source={require("../assets/images/Brooklyn.png")}
									style={styles.riderProfileButtonImage}
									resizeMode="cover"
								/>
								<View style={{ flexShrink: 1, gap: 4 }}>
									<Text style={styles.deliveryMessageHeading}>Brooklyn Simmons</Text>
									<Text style={styles.deliveryMessage}>Personal Courier</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.contactRiderButton}>
								<PhoneIcon />
							</TouchableOpacity>
						</View>
					</BottomSheetScrollView>
				</BottomSheet>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	navButton: {
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		borderRadius: 12,
		borderCurve: "continuous",
		backgroundColor: Colors.light.tabBg,
	},
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 15,
	},
	bottomSheetHandle: {
		backgroundColor: "#E3E3E3",
		width: 45,
		height: 5,
		borderRadius: 16,
	},
	timeLeft: {
		color: Colors.light.primary,
		fontSize: 16,
		fontFamily: "soraSemiBold",
		textAlign: "center",
	},
	deliveryInfoText: {
		textAlign: "center",
		marginTop: 2,
		color: Colors.light.border,
		fontSize: 12,
		fontFamily: "sora",
	},
	progressView: {
		flexDirection: "row",
		marginTop: 25,
		gap: 10,
	},
	progressBar: {
		height: 4,
		flex: 1,
		backgroundColor: Colors.light.green,
		borderRadius: 20,
	},
	deliveryMessageView: {
		marginTop: 16,
		paddingVertical: 8,
		paddingLeft: 12,
		paddingRight: 16,
		borderWidth: 1,
		borderColor: "#E3E3E3",
		borderRadius: 12,
		borderCurve: "continuous",
		flexDirection: "row",
		gap: 16,
	},
	motorbikeIconView: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E3E3E3",
		borderRadius: 12,
		borderCurve: "continuous",
		width: 56,
		height: 56,
	},
	motorbikeIcon: {
		width: 27.5,
		height: 27.5,
	},
	deliveryMessageHeading: {
		color: Colors.light.primary,
		fontSize: 14,
		fontFamily: "soraSemiBold",
	},
	deliveryMessage: {
		alignSelf: "flex-start",
		color: Colors.light.border,
		fontSize: 12,
		lineHeight: 18,
		fontFamily: "soraLight",
	},
	riderView: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 12,
		flexWrap: "wrap",
		marginTop: 14,
		alignItems: "center",
	},
	riderProfileButton: {
		flexDirection: "row",
		gap: 16,
		alignItems: "center",
	},
	riderProfileButtonImage: {
		width: 56,
		height: 56,
		borderRadius: 14,
		borderCurve: "continuous",
	},
	contactRiderButton: {
		width: 44,
		height: 44,
		borderRadius: 12,
		borderCurve: "continuous",
		borderWidth: 1,
		borderColor: "#E3E3E3",
		justifyContent: "center",
		alignItems: "center",
	},
});
