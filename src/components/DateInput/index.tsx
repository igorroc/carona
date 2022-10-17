import React from "react"

import { Text, TouchableWithoutFeedback, View } from "react-native"

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import { Input } from "./styles"
import { FontAwesome5 } from "@expo/vector-icons"
import { useTheme } from "styled-components"

export function DateInput() {
	const theme = useTheme()
	const [date, setDate] = React.useState(new Date())

	function changeDate(event: any, selectedDate: any) {
		const currentDate = selectedDate
		setDate(currentDate)
		console.log(currentDate)
	}

	function showDatePicker() {
		DateTimePickerAndroid.open({
			value: date,
			onChange: changeDate,
		})
	}

	return (
		<Input>
			<TouchableWithoutFeedback onPress={showDatePicker}>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: theme.FONTSIZES.H8,
							color: theme.COLORS.WHITE,
							fontFamily: theme.FONTS.REGULAR,
						}}
					>
						{date.getDate()}/{date.getMonth() + 1}/
						{date.getFullYear()}
					</Text>
					<FontAwesome5 name="calendar-alt" size={24} color="white" />
				</View>
			</TouchableWithoutFeedback>
		</Input>
	)
}
