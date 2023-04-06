import React, { useEffect, useState } from "react"

import { Dimensions, Image, ScrollView, Text, View } from "react-native"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { Pill } from "../../components/Pill"
import { SectionTitle } from "../../components/SectionTitle"

import car from "../../assets/icon/car.png"
import { MainInfo } from "../../components/MainInfo"
import { useTheme } from "styled-components"
import { DestaqueCard } from "../../components/DestaqueCard"
import { LinkButton } from "../../components/LinkButton"
import {
	getLastPayer,
	getLastTrip,
	getMostTripsPerson,
	getTripsAmount,
	getWorstPayer,
} from "../../middlewares/googleSheet"

type UserInfo = {
	name: string
	avatar: string
}

type LastTripType = {
	users: Array<UserInfo>
	date: string
}

export function Home() {
	const theme = useTheme()
	const height = Dimensions.get("window").height

	const [tripsAmount, setTripsAmount] = useState(0)
	const [lastPayer, setLastPayer] = useState("")
	const [mostTrips, setMostTrips] = useState("")
	const [worstPayer, setWorstPayer] = useState("")

	const [lastTrip, setLastTrip] = useState<LastTripType>()

	useEffect(() => {
		async function getData() {
			await getTripsAmount()
				.then((res) => {
					setTripsAmount(res)
				})
				.catch((err) => console.log(err))
			await getLastPayer()
				.then((res) => {
					setLastPayer(res)
				})
				.catch((err) => console.log(err))
			await getWorstPayer()
				.then((res) => {
					setWorstPayer(res)
				})
				.catch((err) => console.log(err))
			await getMostTripsPerson()
				.then((res) => {
					setMostTrips(res)
				})
				.catch((err) => console.log(err))
			await getLastTrip()
				.then((res) => {
					setLastTrip(res)
				})
				.catch((err) => console.log(err))
		}

		getData()
	}, [])

	return (
		<MaxWidthWrapper>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					// maxHeight: height - 310,
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
							{tripsAmount}
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
							description={lastPayer}
							icon="dollar-sign"
						/>
						<DestaqueCard
							name="Mais viagens"
							description={mostTrips}
							icon="car"
						/>
						<DestaqueCard
							name="Mal pagador"
							description={worstPayer}
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
					<SectionTitle>
						Última Viagem {lastTrip ? `(${lastTrip.date})` : ""}
					</SectionTitle>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						{lastTrip &&
							lastTrip.users.length > 0 &&
							lastTrip.users.map((user, index) => (
								<Pill
									name={user.name}
									avatar="man"
									key={index}
								/>
							))}
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
