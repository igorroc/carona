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
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						// headerShown: false,
						headerTitle: "",
						tabBarIcon: ({ focused, color, size }) => {
							return (
								<FontAwesome5
									name={Tabs[route.name].activeIcon}
									size={size}
									color={color}
								/>
							)
						},
						tabBarInactiveTintColor: THEME.COLORS.GRAY,
						tabBarActiveTintColor: THEME.COLORS.PRIMARY,
						tabBarStyle: {
							paddingBottom: 10,
							paddingTop: 10,
							backgroundColor: THEME.COLORS.BLACK,
							height: 70,
						},
						tabBarShowLabel: false,
					})}
				>
					<Tab.Screen name="Home" component={Home} />
					<Tab.Screen name="User" component={User} />
					<Tab.Screen name="NewTrip" component={NewTrip} />
					<Tab.Screen name="Cash" component={Cash} />
					<Tab.Screen name="Calculator" component={Calculator} />
				</Tab.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	)
}
