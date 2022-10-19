import React from "react"

import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { Pill } from "../../components/Pill"
import { SectionTitle } from "../../components/SectionTitle"

import car from "../../assets/icon/car.png"
import { MainInfo } from "../../components/MainInfo"
import { useTheme } from "styled-components"
import { DestaqueCard } from "../../components/DestaqueCard"
import { LinkButton } from "../../components/LinkButton"

export function Home() {
	const theme = useTheme()
	const height = Dimensions.get("window").height

	return (
		<MaxWidthWrapper>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					maxHeight: height - 310,
					flex: 1,
				}}
			>
				<MainInfo>
					<Image
						source={car}
						style={{
							width: 80,
							height: 80,
							marginRight: 10,
						}}
					/>
					<View>
						<Text
							style={{
								fontSize: theme.FONTSIZES.H3,
								color: theme.COLORS.WHITE,
								fontFamily: theme.FONTS.BOLD,
							}}
						>
							658
						</Text>
						<Text
							style={{
								fontSize: theme.FONTSIZES.H7,
								color: theme.COLORS.WHITE50,
								fontFamily: theme.FONTS.MEDIUM,
							}}
						>
							Viagens realizadas
						</Text>
					</View>
				</MainInfo>
				<View
					style={{
						justifyContent: "center",
						marginBottom: 40,
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
							icon="dollar-sign"
						/>
						<DestaqueCard
							name="Mais viagens"
							description="Isabelle S. Cruz"
							icon="car"
						/>
						<DestaqueCard
							name="Mais idas"
							description="Isabelle S. Cruz"
							icon="plane-departure"
						/>
						<DestaqueCard
							name="Mais voltas"
							description="Nicole Rocha"
							icon="plane-arrival"
						/>
						<DestaqueCard
							name="Mal pagador"
							description="Alice Martins"
							icon="skull"
						/>
					</ScrollView>
				</View>
				<View
					style={{
						justifyContent: "center",
						marginBottom: 40,
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
				<View>
					<SectionTitle>Planilha</SectionTitle>
					<LinkButton url="https://docs.google.com/spreadsheets/d/1XxK_0arRVIOYiK1L4MyT9hODgO-sm8IjEfk8tgGW4QE/edit?usp=sharing">
						<Pill
							avatar="link"
							name="Link"
							style={{
								maxWidth: 150,
							}}
						/>
					</LinkButton>
				</View>
			</ScrollView>
		</MaxWidthWrapper>
	)
}
