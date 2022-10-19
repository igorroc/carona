import { FontAwesome5 } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { View } from "react-native"
import { useTheme } from "styled-components"

import { Description, Flex, Name, IconWrapper, Wrapper } from "./styles"

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
				colors={["#36473D30", "#22342A30"]}
				end={{ x: 0, y: 1 }}
				style={{
					borderRadius: 30,
					borderWidth: 1,
					borderColor: "#575757",
				}}
			>
				<Wrapper>
					<IconWrapper>
						<FontAwesome5
							name={props.icon}
							size={20}
							color={theme.COLORS.PRIMARY}
						/>
					</IconWrapper>

					<Name>{props.name}</Name>
					<Description>{props.description}</Description>
				</Wrapper>
			</LinearGradient>
		</Flex>
	)
}
