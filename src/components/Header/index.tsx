import { FontAwesome5 } from "@expo/vector-icons"
import React, { useEffect, useState } from "react"

import { Text, TouchableOpacity, View } from "react-native"
import { useTheme } from "styled-components"
import { MaxWidthWrapper } from "../MaxWidthWrapper"

import { Wrapper, Sub, Title, Saldo } from "./styles"
import { getSaldo } from "../../middlewares/googleSheet"

export function Header() {
	const [showSaldo, setShowSaldo] = useState(false)
	const theme = useTheme()
	const [saldo, setSaldo] = useState(0)

	useEffect(() => {
		async function getData() {
			await getSaldo().then((res) => {
				setSaldo(res)
			})
		}

		getData()
	}, [])

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
				<TouchableOpacity onPress={handleClick}>
					<Saldo>
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
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
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
											color: theme.COLORS.WHITE,
										}}
									>
										R$ {saldo.toFixed(2)}
									</Text>
								</View>
							)}

							{!showSaldo && (
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
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
											backgroundColor: theme.COLORS.GRAY,
										}}
									/>
								</View>
							)}
						</Title>
					</Saldo>
				</TouchableOpacity>
			</Wrapper>
		</MaxWidthWrapper>
	)
}
