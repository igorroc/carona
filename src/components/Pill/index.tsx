import React from "react"

import { TouchableOpacity } from "react-native"

import { LinearGradient } from "expo-linear-gradient"

import { Avatar, Name, Wrapper } from "./styles"
import { user } from "../Avatar"
import { StyledProps } from "styled-components"

interface PillProps {
	name: string
	avatar:
		| "blackWomanHappy"
		| "blackWomanNeutral"
		| "whiteManBeard"
		| "whiteManGlasses"
		| "whiteManHat"
		| "whiteWoman"
		| "link"
		| "man"

	style?: StyledProps<any>
}

export function Pill(props: PillProps) {
	return (
		<LinearGradient
			colors={["#E3E3E330", "#AEAEAE30"]}
			style={{
				flex: 1,
				alignSelf: "flex-start",
				borderRadius: 100,
				maxHeight: 60,
				margin: 10,
				paddingRight: 10,
				...props.style,
			}}
		>
			<Wrapper>
				<Avatar source={user[props.avatar]} />
				<Name>{props.name}</Name>
			</Wrapper>
		</LinearGradient>
	)
}
