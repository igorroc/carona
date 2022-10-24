import React, { useEffect, useState } from "react"

import { View, ScrollView, Dimensions, ActivityIndicator } from "react-native"
import { useTheme } from "styled-components"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { TableItem } from "../../components/TableItem"
import { TextInput } from "../../components/TextInput"
import DataAPI from "../../middlewares/googleSheet"
import { Table, TableHeader, TableHeaderText } from "./styles"

export function User() {
	const theme = useTheme()
	const height = Dimensions.get("window").height
	const [data, setData] = useState([])
	const [users, setUsers] = useState([{} as any])
	const [search, setSearch] = useState("")

	useEffect(() => {
		DataAPI("Total").then((response) => {
			if (!response) return

			const newList = new Array()

			response.forEach((item: Array<string>) => {
				if (
					item[0] === "TOTAL:" ||
					item[0] === "Viagens" ||
					Number(item[0]) ||
					!item[0] ||
					item[0] === "" ||
					item[0] === " " ||
					item[0] === "Nome"
				)
					return

				newList.push({
					name: item[0],
					viagens: Number(item[1]),
					parcial: Number(item[2]),
					pago: Number(item[3]),
					saldo: Number(item[4]),
				})
			})

			setUsers(newList)

			setData(response)
		})
	}, [users])

	if (!data || data.length == 0) {
		return (
			<ActivityIndicator
				size="large"
				animating={true}
				color={theme.COLORS.PRIMARY}
				style={{
					flex: 1,
				}}
			/>
		)
	}

	return (
		<MaxWidthWrapper>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<SectionTitle>
					{`Passageiros ${
						users.length > 1 ? `(${users.length})` : ""
					}`}
				</SectionTitle>
				<TextInput
					placeholder="Buscar"
					style={{
						width: 150,
						height: 40,
					}}
					value={search}
					onChangeText={(text: string) => setSearch(text)}
				/>
			</View>
			<Table>
				<TableHeader
					style={{
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
					}}
				>
					<TableHeaderText>Nome</TableHeaderText>
					<TableHeaderText>Saldo</TableHeaderText>
				</TableHeader>
				<ScrollView
					style={{
						flex: 1,
						width: "100%",
						height: 200,
						maxHeight: height - 400,
					}}
				>
					{(!users || users.length <= 1) && (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
								width: "100%",
								height: "100%",
								paddingTop: 50,
							}}
						>
							<ActivityIndicator
								size="large"
								animating={true}
								color={theme.COLORS.PRIMARY}
								style={{
									flex: 1,
								}}
							/>
						</View>
					)}
					{users &&
						users.map(
							(user, index) =>
								user.name &&
								user.name.toLowerCase().includes(search.toLowerCase()) && (
									<TableItem
										key={index}
										name={user.name}
										saldo={user.saldo}
										// avatar={avatars[user.name] || "man"}
										avatar={user.avatar || "man"}
										variant={
											index % 2 === 0 ? "even" : "odd"
										}
									/>
								)
						)}
				</ScrollView>
			</Table>
		</MaxWidthWrapper>
	)
}
