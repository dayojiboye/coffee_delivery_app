import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/constants/Colors";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import { OrderTabs } from "@/constants";
import TabButtons, { TabButton } from "@/components/tab-button";
import EditIcon from "@/assets/icons/edit.svg";
import NoteIcon from "@/assets/icons/note.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import PlusIcon from "@/assets/icons/plus-dark.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import DiscountIcon from "@/assets/icons/discount.svg";
import ChevronDown from "@/assets/icons/chevron-down-dark.svg";
import WalletIcon from "@/assets/icons/wallet.svg";
import CustomButton from "@/components/button";

export default function OrderScreen() {
	const router = useRouter();
	const { name } = useLocalSearchParams();
	const [currentTab, setCurrentTab] = React.useState(OrderTabs.Deliver);
	const [quantity, setQuantity] = React.useState(1);

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

	function onDecreaseQuantity() {
		setQuantity((prevQuantity) => prevQuantity - 1);
	}

	function onIncreaseQuantity() {
		setQuantity((prevQuantity) => prevQuantity + 1);
	}

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
			<ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
				<View style={{ paddingHorizontal: 24 }}>
					<Text style={styles.headingText}>
						{currentTab === 1 ? "Pick Up" : "Delivery"} Address
					</Text>
					<Text style={styles.deliveryAddressHeading}>Jl. Kpg Sutoyo</Text>
					<Text style={styles.address}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
					<View style={styles.addressCta}>
						<TouchableOpacity style={styles.addressCtaButton}>
							<EditIcon />
							<Text>Edit Address</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.addressCtaButton}>
							<NoteIcon />
							<Text>Add Note</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.divider} />
					<View style={styles.product}>
						<View style={[styles.row, { gap: 16 }]}>
							<Image source={require("../assets/images/coffee1.png")} style={styles.image} />
							<View>
								<Text style={styles.headingText}>{name}</Text>
								<Text style={styles.address}>Deep Foam</Text>
							</View>
						</View>
						<View style={[styles.row, { gap: 18 }]}>
							<TouchableOpacity
								style={styles.quantityButton}
								disabled={quantity === 1}
								onPress={onDecreaseQuantity}
							>
								<MinusIcon />
							</TouchableOpacity>
							<Text style={styles.quantity}>{quantity}</Text>
							<TouchableOpacity style={styles.quantityButton} onPress={onIncreaseQuantity}>
								<PlusIcon stroke="red" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.thickDivider} />
				<View style={{ paddingHorizontal: 24 }}>
					<Pressable style={styles.discountButton}>
						<DiscountIcon />
						<Text style={styles.discountButtonText}>1 Discount is Applied</Text>
						<ChevronRight style={{ marginLeft: "auto" }} />
					</Pressable>
					<Text style={[styles.headingText, { marginTop: 24 }]}>Payment Summary</Text>
					<View style={[styles.row, { justifyContent: "space-between", marginTop: 16 }]}>
						<Text style={styles.infoTitle}>Price</Text>
						<Text style={styles.infoValue}>$ 4.53</Text>
					</View>
					<View style={[styles.row, { justifyContent: "space-between", marginTop: 8 }]}>
						<Text style={styles.infoTitle}>Delivery Fee</Text>
						<View style={[styles.row, { gap: 8 }]}>
							<Text style={styles.initialPrice}>$ 2.0</Text>
							<Text style={styles.infoValue}>$ 1.0</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<Pressable style={[styles.row, { justifyContent: "space-between", width: "100%" }]}>
					<View style={[styles.row, { gap: 9.5 }]}>
						<WalletIcon />
						<View>
							<Text style={styles.infoValue}>Cash/Wallet</Text>
							<Text style={styles.amount}>$ 5.53</Text>
						</View>
					</View>
					<ChevronDown />
				</Pressable>
				<CustomButton
					label="Order"
					style={{ marginTop: 8, width: "100%" }}
					onPress={() => router.push("/tracking")}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	headerTitle: {
		color: Colors.light.primary,
		fontSize: 16,
		fontFamily: "soraSemiBold",
	},
	container: {
		flexGrow: 1,
		paddingVertical: 24,
	},
	headingText: {
		color: Colors.light.primary,
		fontSize: 16,
		fontFamily: "soraSemiBold",
	},
	deliveryAddressHeading: {
		color: Colors.light.secondary,
		fontSize: 14,
		fontFamily: "soraSemiBold",
		marginTop: 16,
	},
	address: {
		color: Colors.light.border,
		fontSize: 12,
		fontFamily: "sora",
		marginTop: 4,
	},
	addressCta: {
		marginTop: 16,
		flexDirection: "row",
		gap: 8,
	},
	addressCtaButton: {
		backgroundColor: Colors.light.white,
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 16,
		borderWidth: 1,
		borderColor: Colors.light.border,
		alignItems: "center",
		flexDirection: "row",
		gap: 4,
	},
	addressCtaButtonText: {
		color: Colors.light.secondary,
		fontSize: 12,
		fontFamily: "sora",
	},
	divider: {
		backgroundColor: "#E3E3E3",
		height: 1,
		marginVertical: 16,
		maxWidth: 295,
		alignSelf: "center",
		width: "90%",
	},
	product: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 12,
		flexWrap: "wrap",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		width: 54,
		height: 54,
		borderRadius: 8,
		borderCurve: "continuous",
	},
	quantityButton: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: Colors.light.white,
		justifyContent: "center",
		alignItems: "center",
	},
	quantity: {
		color: Colors.light.primary,
		fontSize: 14,
		fontFamily: "soraSemiBold",
	},
	thickDivider: {
		width: "100%",
		backgroundColor: "#F9F2ED",
		height: 4,
		marginVertical: 16,
	},
	discountButton: {
		height: 56,
		width: "100%",
		padding: 16,
		borderWidth: 1,
		borderColor: Colors.light.tabBg,
		backgroundColor: Colors.light.white,
		borderRadius: 16,
		borderCurve: "continuous",
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	discountButtonText: {
		color: Colors.light.secondary,
		fontSize: 14,
		fontFamily: "soraSemiBold",
	},
	infoTitle: {
		color: Colors.light.secondary,
		fontSize: 14,
		fontFamily: "sora",
	},
	infoValue: {
		color: Colors.light.primary,
		fontSize: 14,
		fontFamily: "soraSemiBold",
	},
	initialPrice: {
		textDecorationStyle: "solid",
		textDecorationLine: "line-through",
		textDecorationColor: Colors.light.primary,
		fontFamily: "sora",
	},
	footer: {
		backgroundColor: Colors.light.white,
		paddingTop: 16,
		paddingBottom: 46,
		paddingHorizontal: 24,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		justifyContent: "space-between",
		alignItems: "center",
		borderCurve: "continuous",
	},
	amount: {
		fontSize: 12,
		color: Colors.light.coffee,
		fontFamily: "soraSemiBold",
		marginTop: 4,
	},
});
