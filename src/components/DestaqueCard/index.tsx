import { FontAwesome5 } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { useTheme } from "styled-components"

import { Description, Flex, Name, TopWrapper, Wrapper } from "./styles"

interface DestaqueProps {
	name: string
	description: string
	icon: string
}

export function DestaqueCard(props: DestaqueProps) {
	const theme = useTheme()

	return (
		<Flex>
			<LinearGradient
				colors={[theme.COLORS.BLACK3, theme.COLORS.BLACK2]}
				end={{ x: 0, y: 1 }}
				style={{
					width: 100,
					height: 40,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
				}}
			>
				<TopWrapper>
					<FontAwesome5
						name={props.icon}
						size={24}
						color={theme.COLORS.PRIMARY}
						style={{
							marginLeft: 20,
						}}
					/>
				</TopWrapper>
			</LinearGradient>
			<LinearGradient
				colors={[theme.COLORS.BLACK2, theme.COLORS.BLACK3]}
				end={{ x: 0, y: 1 }}
				style={{
					// flex: 1,
					// height: 100,
					borderTopLeftRadius: 0,
					borderTopRightRadius: 10,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
				}}
			>
				<Wrapper>
					<Name>{props.name}</Name>
					<Description>{props.description}</Description>
				</Wrapper>
			</LinearGradient>
		</Flex>
	)
}
