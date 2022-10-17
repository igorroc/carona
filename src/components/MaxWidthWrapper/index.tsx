import React from "react"

import { SafeAreaView, View } from "react-native"

import { Container } from "./styles"

type Props = {
	children: React.ReactNode
}

export function MaxWidthWrapper(props: Props) {
	return (
		<Container>
			{props.children}
		</Container>
	)
}
