import React from "react"
import {
	useFonts,
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { ThemeProvider } from "styled-components/native"

import THEME from "./src/theme"

import { Home } from "./src/screens/Home"

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_700Bold,
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<ThemeProvider theme={THEME}>
			<Home />
		</ThemeProvider>
	)
}
