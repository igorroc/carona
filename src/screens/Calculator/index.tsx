import React from "react"

import { Dimensions, ScrollView, Text, View } from "react-native"
import { useTheme } from "styled-components"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { TextInput } from "../../components/TextInput"

export function Calculator() {
	const Theme = useTheme()
	const height = Dimensions.get('window').height;

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
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					maxHeight: height - 270,
				}}
			>
				<View
					style={{
						marginBottom: 20,
					}}
				>
					<SectionTitle>Distância base (em km)</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							marginTop: 5,
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
				<View
					style={{
						marginBottom: 20,
					}}
				>
					<SectionTitle>Valor base (em R$)</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							marginTop: 5,
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
				<View
					style={{
						marginBottom: 20,
					}}
				>
					<SectionTitle>Sua distância</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							marginTop: 5,
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
						marginBottom: 20,
						alignItems: "center",
					}}
				>
					<SectionTitle>Resultado</SectionTitle>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							marginTop: 5,
						}}
					>
						<TextInput
							value={"R$ " + Number(result).toFixed(2)}
							keyboardType="numeric"
							style={{
								textAlign: "center",
								backgroundColor: Theme.COLORS.PRIMARY,
								fontSize: Theme.FONTSIZES.H2,
								fontFamily: Theme.FONTS.BOLD,
							}}
							editable={false}
						/>
					</View>
				</View>
			</ScrollView>
		</MaxWidthWrapper>
	)
}
