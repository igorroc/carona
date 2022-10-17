import React from "react"
import {
	useFonts,
	Mitr_200ExtraLight,
	Mitr_300Light,
	Mitr_400Regular,
	Mitr_500Medium,
	Mitr_600SemiBold,
	Mitr_700Bold,
} from "@expo-google-fonts/mitr"
import { FontAwesome5 } from "@expo/vector-icons"
import { ThemeProvider } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import THEME from "./src/theme"

import { Home } from "./src/screens/Home"
import { NewTrip } from "./src/screens/NewTrip"
import { User } from "./src/screens/User"
import { Cash } from "./src/screens/Cash"
import { Calculator } from "./src/screens/Calculator"
import { Header } from "./src/components/Header"
import { View } from "react-native"

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

export default function App() {
	const [fontsLoaded] = useFonts({
		Mitr_200ExtraLight,
		Mitr_300Light,
		Mitr_400Regular,
		Mitr_500Medium,
		Mitr_600SemiBold,
		Mitr_700Bold,
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<ThemeProvider theme={THEME}>
			<NavigationContainer
				theme={{
					dark: true,
					colors: {
						primary: THEME.COLORS.PRIMARY,
						background: THEME.COLORS.BACKGROUND,
						card: THEME.COLORS.BACKGROUND,
						text: THEME.COLORS.TEXT,
						border: THEME.COLORS.BORDER,
						notification: THEME.COLORS.NOTIFICATION,
					},
				}}
			>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						headerTitle: "",
						headerStyle: {
							borderBottomWidth: 0,
							borderBottomColor: "transparent",
							shadowColor: "transparent",
							height: 200,
						},
						tabBarInactiveTintColor: THEME.COLORS.GRAY,
						tabBarActiveTintColor: THEME.COLORS.PRIMARY,
						tabBarStyle: {
							paddingBottom: 10,
							paddingTop: 10,
							backgroundColor: THEME.COLORS.BLACK,
							height: 70,
							border: "none",
						},
						tabBarShowLabel: false,
						tabBarIcon: ({ focused, color, size }) => {
							if (route.name === "NewTrip") {
								return (
									<View
										style={{
											backgroundColor:
												THEME.COLORS.PRIMARY,
											width: 60,
											height: 60,
											borderRadius: 10,
											justifyContent: "center",
											alignItems: "center",
											marginBottom: 80,
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
							return (
								<FontAwesome5
									name={Tabs[route.name].activeIcon}
									size={size}
									color={color}
								/>
							)
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
			</NavigationContainer>
		</ThemeProvider>
	)
}
