import React from "react"
import { useTheme } from "styled-components"

import { Wrapper } from "./styles"

interface SelectorProps {
	children: React.ReactNode
}

export function Selector(props: SelectorProps) {
	const theme = useTheme()
	return (
		<Wrapper
			style={{
				backgroundColor: theme.COLORS.DARKGRAY,
			}}
		>
			{props.children}
		</Wrapper>
	)
}
