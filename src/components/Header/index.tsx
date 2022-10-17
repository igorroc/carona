import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"

import { Text, View } from "react-native"
import { useTheme } from "styled-components"

import { Wrapper, Sub, Title, Saldo } from "./styles"

export function Header() {
	const [showSaldo, setShowSaldo] = React.useState(false)
	const theme = useTheme()
	let saldo = 125

	function handleClick() {
		console.log("click")
	}

	return (
		<Wrapper>
			<View>
				<Sub>Olá, Igor!</Sub>
				<Title>Caroninha</Title>
			</View>
			<Saldo
				onPress={() => {
					console.log("click")
				}}
			>
				<Sub
					style={{
						color: showSaldo
							? theme.COLORS.WHITE
							: theme.COLORS.GRAY,
					}}
				>
					Meu saldo
				</Sub>
				<Title>
					{showSaldo && (
						<>
							<FontAwesome5 name="eye" size="24" color="red" />
							{saldo.toLocaleString("BRL", {
								style: "currency",
								currency: "BRL",
							})}
						</>
					)}

					{!showSaldo && (
						<View style={{ flexDirection: "row" }}>
							<FontAwesome5
								name="eye"
								size={20}
								color={theme.COLORS.GRAY}
							/>
							<View
								style={{
									width: 80,
									height: 20,
									borderRadius: 5,
									marginLeft: 10,
									backgroundColor: theme.COLORS.GRAY,
								}}
							/>
						</View>
					)}
				</Title>
			</Saldo>
		</Wrapper>
	)
}
