import React from "react"

import { Text, TouchableOpacity, View } from "react-native"
import { Division } from "../../components/Division"
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper"
import { SectionTitle } from "../../components/SectionTitle"
import { TextInput } from "../../components/TextInput"
import { DateInput } from "../../components/DateInput"

import {
	AutocompleteDropdown,
	TAutocompleteDropdownItem,
} from "react-native-autocomplete-dropdown"
import { getNames } from "../../middlewares/googleSheet"
import { FontAwesome5 } from "@expo/vector-icons"
import theme from "../../theme"

export function NewTrip() {
	const [dbNames, setDbNames] =
		React.useState<Array<TAutocompleteDropdownItem>>()
	const [date, setDate] = React.useState(new Date())
	const [passengers, setPassengers] = React.useState([
		{
			name: "",
			value: 0,
		},
	])
	const [selectedPassenger, setSelectedPassenger] = React.useState("")

	function handleSelect(ev: TAutocompleteDropdownItem) {
		if (ev) {
			setSelectedPassenger(ev.title as string)
		}
	}

	function handleAddPassenger(passenger: any) {
		let name = passenger.name

		if (name == "") {
			name = selectedPassenger
		}

		console.log(name, passenger.value)

		setPassengers([
			...passengers,
			{
				name,
				value: passenger.value,
			},
		])

		console.log(passengers)

		setSelectedPassenger("")
	}

	function handleRemovePassenger(passenger: any) {
		console.log(passenger)

		setPassengers(
			passengers.filter((p) => p.name != passenger.name && p.value != 0)
		)
	}

	React.useEffect(() => {
		async function getData() {
			const names = await getNames()
			setDbNames(names)
		}

		getData()
	}, [])

	return (
		<MaxWidthWrapper>
			<SectionTitle>Passageiros</SectionTitle>
			<View
				style={{
					width: "100%",
					flex: 1,
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}
			>
				{passengers.map((passenger, index) => (
					<View
						style={{
							flexDirection: "row",
						}}
						key={index}
					>
						<AutocompleteDropdown
							clearOnFocus={false}
							closeOnBlur={false}
							closeOnSubmit={false}
							onSelectItem={(ev) => handleSelect(ev)}
							dataSet={dbNames}
							inputContainerStyle={{
								backgroundColor: "#2e2e2e",
								borderRadius: 10,
								width: "100%",
								height: 60,
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "row",
							}}
							textInputProps={{
								placeholder: "Busque por nome",
								autoCorrect: false,
								autoCapitalize: "none",
								style: {
									color: "#fff",
									flex: 1,
								},
							}}
							onChangeText={(text: string) => {
								setPassengers([
									...passengers.slice(0, index),
									{
										...passengers[index],
										name: text,
									},
									...passengers.slice(index + 1),
								])
							}}
						/>
						<TextInput
							placeholder="Valor"
							style={{
								maxWidth: 80,
								marginLeft: 10,
							}}
							keyboardType="numeric"
							value={
								passenger.value.toString() == "0"
									? ""
									: passenger.value.toString()
							}
							onChangeText={(value: number) => {
								setPassengers([
									...passengers.slice(0, index),
									{
										...passengers[index],
										value,
									},
									...passengers.slice(index + 1),
								])
							}}
						/>
						{index == passengers.length - 1 ? (
							<TouchableOpacity
								style={{
									backgroundColor: theme.COLORS.PRIMARY,
									width: 60,
									height: 60,
									marginLeft: 10,
									borderRadius: 10,
									alignItems: "center",
									justifyContent: "center",
								}}
								onPress={() => handleAddPassenger(passenger)}
							>
								<FontAwesome5
									name={"plus"}
									size={20}
									color={theme.COLORS.WHITE}
								/>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								style={{
									backgroundColor: theme.COLORS.ERROR,
									width: 60,
									height: 60,
									marginLeft: 10,
									borderRadius: 10,
									alignItems: "center",
									justifyContent: "center",
								}}
								onPress={() => handleRemovePassenger(passenger)}
							>
								<FontAwesome5
									name={"minus"}
									size={20}
									color={theme.COLORS.WHITE}
								/>
							</TouchableOpacity>
						)}
					</View>
				))}
			</View>
		</MaxWidthWrapper>
	)
}
