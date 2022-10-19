import React from "react"

import { LinearGradient } from "expo-linear-gradient"

import { Avatar, Name, Wrapper } from "./styles"
import { user } from "../Avatar"

interface PillProps {
	name: string
	avatar:
		| "blackWomanHappy"
		| "blackWomanNeutral"
		| "whiteManBeard"
		| "whiteManGlasses"
		| "whiteManHat"
		| "whiteWoman"
}

export function Pill(props: PillProps) {
	return (
		<LinearGradient
			colors={["#E3E3E330", "#AEAEAE30"]}
			style={{
				borderRadius: 100,
				maxHeight: 60,
				maxWidth: 300,
				margin: 10,
			}}
		>
			<Wrapper>
				<Avatar source={user[props.avatar]} />
				<Name>{props.name}</Name>
			</Wrapper>
		</LinearGradient>
	)
}
