import React from "react"

import { Text } from "react-native"
import { useTheme } from "styled-components"

interface TitleProps {
	children: string
}

export function SectionTitle(props: TitleProps) {
	const theme = useTheme()
	return (
		<Text
			style={{
				fontSize: theme.FONTSIZES.H5,
				color: theme.COLORS.WHITE,
				fontFamily: theme.FONTS.SEMIBOLD,
				marginBottom: 5,
			}}
		>
			{props.children}
		</Text>
	)
}
