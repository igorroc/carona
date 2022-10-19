import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, Button, Image, View } from "react-native"

import {
	useFonts,
	Mitr_200ExtraLight,
	Mitr_300Light,
	Mitr_400Regular,
	Mitr_500Medium,
	Mitr_600SemiBold,
	Mitr_700Bold,
} from "@expo-google-fonts/mitr"
import { ThemeProvider } from "styled-components/native"
import THEME from "./src/theme"

import { NavigationContainer } from "@react-navigation/native"
import { TabRoutes } from "./src/routes/tab.routes"

import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import { user } from "./src/components/Avatar"
import { GoogleLoginButton } from "./src/components/GoogleLoginButton"

WebBrowser.maybeCompleteAuthSession()

const authenticatedUsers = ["rochawiggle@gmail.com"]

export default function App() {
	const [fontsLoaded] = useFonts({
		Mitr_200ExtraLight,
		Mitr_300Light,
		Mitr_400Regular,
		Mitr_500Medium,
		Mitr_600SemiBold,
		Mitr_700Bold,
	})

	const [accessToken, setAccessToken] = useState("")
	const [userInfo, setUserInfo] = useState({} as any)
	const [isValid, setIsValid] = useState(false)

	const [request, response, promptAsync] = Google.useAuthRequest({
		androidClientId:
			"415495582778-ka5brgviutt0camdlag76sp3krrfhv8o.apps.googleusercontent.com",
		expoClientId:
			"415495582778-sekklfgll3ddkv34itaovuf3q7aomjui.apps.googleusercontent.com",
	})

	useEffect(() => {
		if (response?.type === "success") {
			if (response.authentication) {
				if (response.authentication.accessToken) {
					setAccessToken(response.authentication.accessToken)
				}
			}
		}
	}, [response])

	async function getUserInfo() {
		const userInfoResponse = await fetch(
			"https://www.googleapis.com/userinfo/v2/me",
			{
				headers: { Authorization: `Bearer ${accessToken}` },
			}
		)

		const userData = await userInfoResponse.json()
		setUserInfo(userData)
	}

	if (!fontsLoaded) {
		return null
	}

	function Login() {
		return (
			<ThemeProvider theme={THEME}>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<GoogleLoginButton
						onPress={async () => {
							await promptAsync({ showInRecents: true })
						}}
					/>
				</View>
			</ThemeProvider>
		)
	}

	function Validate() {
		if (!isValid) {
			getUserInfo()
			if (authenticatedUsers.includes(userInfo.email)) {
				setIsValid(true)
			}
		}
		return (
			<ThemeProvider theme={THEME}>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: THEME.FONTSIZES.H6,
							marginBottom: 10,
							color: THEME.COLORS.WHITE,
							flexDirection: "column",
						}}
					>
						Usuário{" "}
						<Text style={{ backgroundColor: "#27382da0" }}>
							{userInfo.email}
						</Text>{" "}
						não autorizado
					</Text>
					<Text
						style={{
							fontSize: THEME.FONTSIZES.H6,
							marginBottom: 10,
							color: THEME.COLORS.WHITE,
						}}
					>
						Faça login novamente
					</Text>
					<GoogleLoginButton
						onPress={async () => {
							await promptAsync({ showInRecents: true })
						}}
					/>
				</View>
			</ThemeProvider>
		)
	}

	return (
		<ThemeProvider theme={THEME}>
			{!accessToken && Login()}
			{accessToken && !isValid && Validate()}
			{accessToken && isValid && (
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
					<TabRoutes />
				</NavigationContainer>
			)}
		</ThemeProvider>
	)
}
