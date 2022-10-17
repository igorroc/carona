import React from "react"

import { Text, View } from "react-native"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { Selector } from "../../components/Selector"
import { SelectorItem } from "../../components/Selector/SelectorItem"
import { TextInput } from "../../components/TextInput"
import { DateInput } from "../../components/DateInput"

export function Cash() {
	return (
		<MaxWidthWrapper>
			<View>
				<SectionTitle>Tipo</SectionTitle>
				<Selector>
					<SelectorItem name="Entrada" />
					<SelectorItem name="Gasto" />
				</Selector>
			</View>
			<View>
				<SectionTitle>Passageiro</SectionTitle>
				<TextInput placeholder="Nome completo" />
			</View>
			<View>
				<SectionTitle>Valor</SectionTitle>
				<TextInput placeholder="R$ 99,99" />
			</View>
			<View>
				<SectionTitle>Data</SectionTitle>
				<DateInput />
			</View>
		</MaxWidthWrapper>
	)
}
