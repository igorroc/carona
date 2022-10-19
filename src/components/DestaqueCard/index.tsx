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
					// flex: 1,
					// height: 100,
					borderRadius: 10,
					borderWidth: 1,
					borderColor: "#fff3",
				}}
			>
				<Wrapper>
					<IconWrapper
					>
						<FontAwesome5
							name={props.icon}
							size={20}
							color={theme.COLORS.PRIMARY}
							style={{
								width: 20,
								height: 20,
								alignItens: "center",
								justifyContent: "center",
							}}
						/>
					</IconWrapper>

					<Name>{props.name}</Name>
					<Description>{props.description}</Description>
				</Wrapper>
			</LinearGradient>
		</Flex>
	)
}
