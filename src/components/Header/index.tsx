import React from "react"

import { Text, View } from "react-native"

import { Wrapper, Sub, Title } from "./styles"

export function Header() {
	return (
		<Wrapper>
			<View>
				<Sub>Olá, Igor!</Sub>
				<Title>Caroninha</Title>
			</View>
		</Wrapper>
	)
}
