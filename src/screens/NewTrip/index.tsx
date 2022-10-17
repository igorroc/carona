import React from "react"

import { Text, View } from "react-native"
import { Division } from "../../components/Division"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { TextInput } from "../../components/TextInput"

export function NewTrip() {
	return (
		<MaxWidthWrapper>
			<SectionTitle>Passageiros</SectionTitle>
			<View
				style={{
					flexDirection: "row",
					flex: 1,
				}}
			>
				<TextInput
					placeholder="Nome completo"
					style={{
						flex: 1,
					}}
					autoComplete="name"
				/>
				<TextInput
					placeholder="Valor"
					style={{
						maxWidth: 100,
						marginLeft: 10,
					}}
					keyboardType="numeric"
				/>
			</View>
		</MaxWidthWrapper>
	)
}
