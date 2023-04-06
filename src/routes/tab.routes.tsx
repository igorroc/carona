import { Easing, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home } from "../screens/Home"
import { NewTrip } from "../screens/NewTrip"
import { User } from "../screens/User"
import { Cash } from "../screens/Cash"
import { Calculator } from "../screens/Calculator"

import { Header } from "../components/Header"

import THEME from "../theme"

const Tab = createBottomTabNavigator()

const Tabs = {
	Home: {
		activeIcon: "home",
	},
	User: {
		activeIcon: "user-alt",
	},
	NewTrip: {
		activeIcon: "plus",
	},
	Cash: {
		activeIcon: "dollar-sign",
	},
	Calculator: {
		activeIcon: "calculator",
	},
}

type TabName = keyof typeof Tabs

const config = {
	animation: "spring",
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
}

const closeConfig = {
	animation: "timing",
	config: {
		duration: 500,
		easing: Easing.linear,
	},
}

export function TabRoutes() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerTitle: "",
				headerStyle: {
					borderBottomWidth: 0,
					borderBottomColor: "transparent",
					shadowColor: "transparent",
					height: 120,
				},
				tabBarInactiveTintColor: THEME.COLORS.GRAY,
				tabBarActiveTintColor: THEME.COLORS.PRIMARY,
				tabBarStyle: {
					paddingBottom: 10,
					paddingTop: 10,
					backgroundColor: THEME.COLORS.BLACK,
					height: 70,
					borderTopWidth: 0,
					borderTopColor: "transparent",
					shadowColor: "transparent",
				},
				tabBarShowLabel: false,
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "NewTrip") {
						return (
							<View
								style={{
									backgroundColor: THEME.COLORS.PRIMARY,
									width: 60,
									height: 60,
									borderRadius: 10,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<FontAwesome5
									name={Tabs[route.name].activeIcon}
									size={size * 1.2}
									color={THEME.COLORS.WHITE}
								/>
							</View>
						)
					}
					let index = route.name as TabName
					return (
						<FontAwesome5
							name={Tabs[index].activeIcon}
							size={size}
							color={color}
						/>
					)
				},
				gestureEnabled: true,
				gestureDirection: "horizontal",
				transitionSpec: {
					open: config,
					close: closeConfig,
				},
			})}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: () => <Header />,
				}}
			/>
			<Tab.Screen
				name="User"
				component={User}
				options={{
					headerTitle: () => <Header />,
				}}
			/>
			<Tab.Screen
				name="NewTrip"
				component={NewTrip}
				options={{ headerTitle: () => <Header /> }}
			/>
			<Tab.Screen
				name="Cash"
				component={Cash}
				options={{ headerTitle: () => <Header /> }}
			/>
			<Tab.Screen
				name="Calculator"
				component={Calculator}
				options={{ headerTitle: () => <Header /> }}
			/>
		</Tab.Navigator>
	)
}
