import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"

import {
	Text,
	TouchableHighlight,
	TouchableWithoutFeedback,
	View
} from "react-native"
import { useTheme } from "styled-components"
import { MaxWidthWrapper } from "../MaxWidthWrapper"

import { Wrapper, Sub, Title, Saldo } from "./styles"

export function Header() {
	const [showSaldo, setShowSaldo] = React.useState(false)
	const theme = useTheme()
	let saldo = "R$ 125,00"

	function handleClick() {
		setShowSaldo(!showSaldo)
	}

	return (
		<MaxWidthWrapper>
			<Wrapper>
				<View>
					<Sub>Olá, Igor!</Sub>
					<Title>Caroninha</Title>
				</View>
				<TouchableWithoutFeedback onPress={handleClick}>
					<Saldo
						onPress={() => {
							console.log("click")
						}}
					>
						<Sub
							style={{
								color: showSaldo
									? theme.COLORS.WHITE
									: theme.COLORS.GRAY
							}}
						>
							Meu saldo
						</Sub>
						<Title>
							{showSaldo && (
								<View
									style={{
										flexDirection: "row",
										alignItems: "center"
									}}
								>
									<FontAwesome5
										name="eye-slash"
										size={theme.FONTSIZES.H8}
										color={theme.COLORS.GRAY}
									/>
									<Text
										style={{
											alignItems: "center",
											justifyContent: "center",
											minWidth: 80,
											marginLeft: 10,
											fontSize: theme.FONTSIZES.H7,
											fontFamily: theme.FONTS.SEMIBOLD,
											color: theme.COLORS.WHITE
										}}
									>
										{saldo}
									</Text>
								</View>
							)}

							{!showSaldo && (
								<View
									style={{
										flexDirection: "row",
										alignItems: "center"
									}}
								>
									<FontAwesome5
										name="eye"
										size={theme.FONTSIZES.H8}
										color={theme.COLORS.GRAY}
									/>
									<View
										style={{
											width: 80,
											height: 20,
											borderRadius: 5,
											marginLeft: 10,
											backgroundColor: theme.COLORS.GRAY
										}}
									/>
								</View>
							)}
						</Title>
					</Saldo>
				</TouchableWithoutFeedback>
			</Wrapper>
		</MaxWidthWrapper>
	)
}
