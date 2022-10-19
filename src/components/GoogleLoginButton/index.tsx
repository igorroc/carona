import { FontAwesome5 } from "@expo/vector-icons"
import React from "react"

import {
	GestureResponderEvent,
	TouchableOpacity,
	View,
	Text,
} from "react-native"
import { useTheme } from "styled-components"

import { CustomButton } from "./styles"

interface GoogleLoginButtonProps {
	onPress: (event: GestureResponderEvent) => void
}

export function GoogleLoginButton(props: GoogleLoginButtonProps) {
	const theme = useTheme()
	return (
		<TouchableOpacity onPress={props.onPress}>
			<CustomButton>
				<FontAwesome5
					name="google"
					size={24}
					color={theme.COLORS.WHITE}
				/>
				<Text
					style={{
						fontSize: 24,
						marginLeft: 10,
						color: theme.COLORS.WHITE,
					}}
				>
					Login
				</Text>
			</CustomButton>
		</TouchableOpacity>
	)
}
