import React from "react"

import {
	useFonts,
	Mitr_200ExtraLight,
	Mitr_300Light,
	Mitr_400Regular,
	Mitr_500Medium,
	Mitr_600SemiBold,
	Mitr_700Bold
} from "@expo-google-fonts/mitr"
import { ThemeProvider } from "styled-components/native"
import { NavigationContainer } from "@react-navigation/native"

import THEME from "./src/theme"
import { TabRoutes } from "./src/routes/tab.routes"

export default function App() {
	const [fontsLoaded] = useFonts({
		Mitr_200ExtraLight,
		Mitr_300Light,
		Mitr_400Regular,
		Mitr_500Medium,
		Mitr_600SemiBold,
		Mitr_700Bold
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
						notification: THEME.COLORS.NOTIFICATION
					}
				}}
			>
				<TabRoutes />
			</NavigationContainer>
		</ThemeProvider>
	)
}
