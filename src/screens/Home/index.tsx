import React from "react"

import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { Header } from "../../components/Header"
import { Lorem } from "../../components/Lorem"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { Pill } from "../../components/Pill"

import { Container } from "./styles"

export function Home() {
	return (
		<MaxWidthWrapper>
			<Header />
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<ScrollView
					horizontal
					contentContainerStyle={{
						width: "100%",
						flexGrow: 1,
					}}
				>
					<Pill name="João Rupp" avatar="whiteManHat" />
					<Pill name="Isabelle Cruz" avatar="blackWomanHappy" />
					<Pill name="Michelle Brito" avatar="whiteWoman" />
					<Pill name="Nicole Rocha" avatar="blackWomanNeutral" />
				</ScrollView>
			</View>
			{/* <Lorem /> */}
		</MaxWidthWrapper>
	)
}
