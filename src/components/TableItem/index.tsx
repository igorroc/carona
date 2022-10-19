import { LinearGradient } from "expo-linear-gradient"
import React from "react"

import { Text, View } from "react-native"
import { useTheme } from "styled-components"
import { user } from "../Avatar"
import { Avatar } from "../Pill/styles"

import { Row } from "./styles"

export interface ItemProps {
	name: string
	saldo: number
	avatar:
		| "blackWomanHappy"
		| "blackWomanNeutral"
		| "whiteManBeard"
		| "whiteManGlasses"
		| "whiteManHat"
		| "whiteWoman"
	variant?: "odd" | "even"
}
export function TableItem(props: ItemProps) {
	const theme = useTheme()
	const afterColor =
		props.saldo > 0
			? theme.COLORS.SUCCESS
			: props.saldo < 0
			? theme.COLORS.ERROR
			: "#0000"
	return (
		<Row
			style={{
				backgroundColor: props.variant === "odd" ? "" : "#2c2c2c",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Avatar source={user[props.avatar]} />
				<Text
					style={{
						color: theme.COLORS.WHITE,
						fontFamily: theme.FONTS.REGULAR,
						maxWidth: 180,
					}}
				>
					{props.name}
				</Text>
			</View>
			<Text
				style={{
					color: theme.COLORS.WHITE,
					fontFamily: theme.FONTS.SEMIBOLD,
				}}
			>
				R$ {props.saldo.toFixed(2)}
				{/* R$ {props.saldo} */}
			</Text>

			{/* After */}

			<LinearGradient
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					width: 100,
					zIndex: -1,
					opacity: 0.2,
				}}
				colors={["#0000", afterColor]}
				end={{ x: 1, y: 0 }}
			/>
		</Row>
	)
}
