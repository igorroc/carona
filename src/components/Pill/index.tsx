import React from "react"

import { Text, View, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { Avatar, Name, Wrapper } from "./styles"

import blackWomanHappy from "../../assets/avatar/blackWomanHappy.png"
import blackWomanNeutral from "../../assets/avatar/blackWomanNeutral.png"
import whiteManBeard from "../../assets/avatar/whiteManBeard.png"
import whiteManGlasses from "../../assets/avatar/whiteManGlasses.png"
import whiteManHat from "../../assets/avatar/whiteManHat.png"
import whiteWoman from "../../assets/avatar/whiteWoman.png"

const user = {
	blackWomanHappy,
	blackWomanNeutral,
	whiteManBeard,
	whiteManGlasses,
	whiteManHat,
	whiteWoman,
}

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
			colors={["#3F3F3F", "#313131"]}
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
