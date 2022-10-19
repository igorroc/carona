import { LinearGradient } from "expo-linear-gradient"
import React from "react"

import { View } from "react-native"
import { useTheme } from "styled-components"

import { MainInfoContainer } from "./styles"

interface InfoProps {
	children: React.ReactNode
}

export function MainInfo(props: InfoProps) {
	const theme = useTheme()
	return (
		<LinearGradient
			colors={[theme.COLORS.PRIMARY, theme.COLORS.PRIMARYDARK]}
			end={{ x: 0, y: 1 }}
			style={{
				borderRadius: 30,
				position: "relative",
				paddingVertical: 10,
				marginBottom: 40,
			}}
		>
			<MainInfoContainer>{props.children}</MainInfoContainer>
			<View
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: theme.COLORS.PRIMARYDARK,
					borderRadius: 30,
					opacity: 0.5,
					zIndex: -1,
					transform: [
						{
							scale: 0.8,
						},
						{
							translateY: 30,
						},
					],
				}}
			>
				<View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: theme.COLORS.PRIMARYDARK,
						borderRadius: 30,
						opacity: 0.5,
						zIndex: -1,
						transform: [
							{
								scale: 0.8,
							},
							{
								translateY: 30,
							},
						],
					}}
				></View>
			</View>
		</LinearGradient>
	)
}
