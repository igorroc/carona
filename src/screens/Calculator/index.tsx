import { LinearGradient } from "expo-linear-gradient"
import React from "react"

import { Dimensions, ScrollView, Text, View } from "react-native"
import { useTheme } from "styled-components"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { TextInput } from "../../components/TextInput"

export function Calculator() {
	const theme = useTheme()
	const height = Dimensions.get("window").height

	const [distBase, setDistBase] = React.useState("18")
	const [dist, setDist] = React.useState("")
	const [valueBase, setValueBase] = React.useState("3")
	const [result, setResult] = React.useState("4.67")

	function calculate(dist: number, distBase: number, valueBase: number) {
		const x = (dist / distBase) * valueBase
		setResult(x.toString())
	}

	async function handleInputDistBase(text: string) {
		const x = Number(text)
		setDistBase(() => {
			calculate(Number(dist), x, Number(valueBase))
			return text
		})
	}

	async function handleInputDist(text: string) {
		const x = Number(text)
		setDist(() => {
			calculate(x, Number(distBase), Number(valueBase))
			return text
		})
	}

	async function handleInputValueBase(text: string) {
		const x = Number(text)
		setValueBase(() => {
			calculate(Number(dist), Number(distBase), x)
			return text
		})
	}

	function handleDot(text: string) {
		const x = text.replaceAll(",", ".")
		return x
	}

	return (
		<MaxWidthWrapper>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View>
					<SectionTitle>Distância base (em km)</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
						}}
					>
						<TextInput
							placeholder="18"
							value={distBase.toString()}
							keyboardType="numeric"
							onChangeText={handleInputDistBase}
						/>
					</View>
				</View>
				<View>
					<SectionTitle>Valor base (em R$)</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
						}}
					>
						<TextInput
							placeholder="3"
							value={valueBase.toString()}
							keyboardType="numeric"
							onChangeText={handleInputValueBase}
						/>
					</View>
				</View>
				<View>
					<SectionTitle>Sua distância</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
						}}
					>
						<TextInput
							placeholder="28"
							value={dist.toString()}
							keyboardType="numeric"
							onChangeText={handleInputDist}
						/>
					</View>
				</View>
				<View
					style={{
						alignItems: "center",
					}}
				>
					<SectionTitle>Resultado</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
						}}
					>
						<LinearGradient
							colors={[
								theme.COLORS.PRIMARY,
								theme.COLORS.PRIMARYDARK,
							]}
							end={{ x: 1, y: 0 }}
							start={{ x: 0, y: 0 }}
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 10,
								padding: 10,
								paddingHorizontal: 20,
							}}
						>
							<Text
								style={{
									textAlign: "center",
									fontSize: theme.FONTSIZES.H2,
									fontFamily: theme.FONTS.BOLD,
									// flex: 1,
									flexGrow: 1,
									color: theme.COLORS.WHITE,
								}}
							>
								{!Number(result) || Number(result) < 0
									? "Digite um valor válido"
									: `R$ ${Number(result).toFixed(2)}`}
							</Text>
						</LinearGradient>
					</View>
				</View>
			</ScrollView>
		</MaxWidthWrapper>
	)
}
