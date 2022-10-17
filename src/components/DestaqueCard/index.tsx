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
		<Wrapper>
			<Name theme={theme}>{props.name}</Name>
			<Description>{props.description}</Description>
		</Wrapper>
	)
}
