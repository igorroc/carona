import React from "react"

import { Image, ScrollView, Text, View } from "react-native"
import { Division } from "../../components/Division"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { Pill } from "../../components/Pill"
import { SectionTitle } from "../../components/SectionTitle"

import car from "../../assets/icon/car.png"
import { MainInfo } from "../../components/MainInfo"
import { useTheme } from "styled-components"
import { DestaqueCard } from "../../components/DestaqueCard"

export function Home() {
	const theme = useTheme()

	return (
		<MaxWidthWrapper>
			<MainInfo>
				<Image
					source={car}
					style={{
						width: 60,
						height: 60,
						marginRight: 10,
					}}
				/>
				<View>
					<Text
						style={{
							fontSize: theme.FONTSIZES.H5,
							color: theme.COLORS.WHITE,
							fontFamily: theme.FONTS.BOLD,
						}}
					>
						Viagens realizadas
					</Text>
					<Text
						style={{
							fontSize: theme.FONTSIZES.H7,
							color: theme.COLORS.WHITE50,
							fontFamily: theme.FONTS.MEDIUM,
						}}
					>
						658
					</Text>
				</View>
			</MainInfo>
			<View
				style={{
					justifyContent: "center",
					marginVertical: 80,
				}}
			>
				<SectionTitle>Destaques</SectionTitle>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<DestaqueCard
						name="Último pagador"
						description="João Rupp"
					/>
					<DestaqueCard
						name="Último pagador"
						description="João Rupp"
					/>
					<DestaqueCard
						name="Último pagador"
						description="João Rupp"
					/>
				</ScrollView>
			</View>
			<View
				style={{
					justifyContent: "center",
				}}
			>
				<SectionTitle>Última Viagem</SectionTitle>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
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
