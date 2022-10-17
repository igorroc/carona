import React from "react"

import { View, Text, ScrollView, Dimensions } from "react-native"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { ItemProps, TableItem } from "../../components/TableItem"
import { TextInput } from "../../components/TextInput"
import { Table, TableHeader, TableHeaderText } from "./styles"

const userList = [
	{
		name: "Isabelle Silva dos Santos da Cruz",
		saldo: 159,
		avatar: "blackWomanHappy",
	},
	{
		name: "João Victor Oliveira Rupp Rupp",
		saldo: -3,
		avatar: "whiteManHat",
	},
	{
		name: "Nicole Rocha",
		saldo: -5,
		avatar: "blackWomanNeutral",
	},
	{
		name: "Murilo Patricio Maia",
		saldo: -4.5,
		avatar: "whiteManGlasses",
	},
	{
		name: "Michelle Brito Silva Barbosa",
		saldo: 0,
		avatar: "whiteWoman",
	},
	{
		name: "Isabelle Silva dos Santos da Cruz",
		saldo: 159,
		avatar: "blackWomanHappy",
	},
	{
		name: "João Victor Oliveira Rupp Rupp",
		saldo: 0,
		avatar: "whiteManHat",
	},
	{
		name: "Nicole Rocha",
		saldo: 0,
		avatar: "blackWomanNeutral",
	},
	{
		name: "Murilo Patricio Maia",
		saldo: -4.5,
		avatar: "whiteManGlasses",
	},
	{
		name: "Michelle Brito Silva Barbosa",
		saldo: -5,
		avatar: "whiteWoman",
	},
] as Array<ItemProps>

export function User() {
	const height = Dimensions.get('window').height;
	return (
		<MaxWidthWrapper>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<SectionTitle>Passageiros</SectionTitle>
				<TextInput
					placeholder="Buscar"
					style={{
						width: 150,
						height: 40,
					}}
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
						maxHeight: height-400,
					}}
				>
					{userList.map((user, index) => (
						<TableItem
							key={index}
							name={user.name}
							saldo={user.saldo}
							avatar={user.avatar}
							variant={index % 2 === 0 ? "even" : "odd"}
						/>
					))}
				</ScrollView>
			</Table>
		</MaxWidthWrapper>
	)
}
