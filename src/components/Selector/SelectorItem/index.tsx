import React from "react"
import { Text } from "react-native"
import { useTheme } from "styled-components"

import { WrapperItem } from "./styles"

interface SelectorItemProps {
	name: string
}

export function SelectorItem(props: SelectorItemProps) {
	const theme = useTheme()

	return (
		<WrapperItem>
			<Text
				style={{
					fontFamily: theme.FONTS.MEDIUM,
					color: theme.COLORS.WHITE,
					fontSize: theme.FONTSIZES.H6,
				}}
			>
				{props.name}
			</Text>
		</WrapperItem>
	)
}
