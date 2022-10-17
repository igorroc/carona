import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { useTheme } from "styled-components"

import { Description, Name, Wrapper } from "./styles"

interface DestaqueProps {
	name: string
	description: string
}

export function DestaqueCard(props: DestaqueProps) {
	const theme = useTheme()

	return (
		<LinearGradient colors={[theme.COLORS.BLACK2, theme.COLORS.BLACK3]}>
			<Wrapper>
				<Name theme={theme}>{props.name}</Name>
				<Description>{props.description}</Description>
			</Wrapper>
		</LinearGradient>
	)
}
