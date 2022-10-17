import React from "react"

import { Text, View, TouchableNativeFeedback, ScrollView } from "react-native"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { Selector } from "../../components/Selector"
import { SelectorItem } from "../../components/Selector/SelectorItem"
import { TextInput } from "../../components/TextInput"
import { DateInput } from "../../components/DateInput"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "styled-components"
import { FontAwesome5 } from "@expo/vector-icons"

export function Cash() {
	const theme = useTheme()
	const [name, setName] = React.useState("")
	const [date, setDate] = React.useState(new Date())
	const [value, setValue] = React.useState("")
	const [type, setType] = React.useState("")

	function handleAdd() {
		console.log("add")
		console.log(name, date, value, type)
	}

	return (
		<MaxWidthWrapper>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View>
					<SectionTitle>Tipo</SectionTitle>
					<Selector>
						<SelectorItem name="Entrada" />
						<SelectorItem name="Gasto" />
					</Selector>
				</View>
				<View>
					<SectionTitle>Passageiro</SectionTitle>
					<TextInput
						placeholder="Nome completo"
						value={name}
						onChangeText={setName}
					/>
				</View>
				<View>
					<SectionTitle>Valor</SectionTitle>
					<TextInput
						placeholder="R$ 99,99"
						value={value}
						onChangeText={setValue}
						keyboardType="numeric"
					/>
				</View>
				<View style={{
					marginBottom: 20
				}}>
					<SectionTitle>Data</SectionTitle>
					<DateInput onChangeDate={setDate} />
				</View>
				<TouchableNativeFeedback
					onPress={handleAdd}
					style={{
						marginTop: 20
					}}
				>
					<LinearGradient
						colors={[
							theme.COLORS.PRIMARYDARK,
							theme.COLORS.PRIMARY
						]}
						end={{ x: 1, y: 0 }}
						start={{ x: 0, y: 1 }}
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 10,
							padding: 10
						}}
					>
						<FontAwesome5
							name="check"
							color={theme.COLORS.WHITE}
							style={{
								fontSize: theme.FONTSIZES.H5,
								fontFamily: theme.FONTS.REGULAR
							}}
						/>
						<Text
							style={{
								color: theme.COLORS.WHITE,
								marginLeft: 10,
								fontSize: theme.FONTSIZES.H3,
								fontFamily: theme.FONTS.REGULAR
							}}
						>
							Confirmar
						</Text>
					</LinearGradient>
				</TouchableNativeFeedback>
			</ScrollView>
		</MaxWidthWrapper>
	)
}
