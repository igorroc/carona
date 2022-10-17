import React from "react"

import { View } from "react-native"

import { Input } from "./styles"

interface InputProps {
	placeholder: string
	style?: object
	keyboardType?:
		| "default"
		| "number-pad"
		| "decimal-pad"
		| "numeric"
		| "email-address"
		| "phone-pad"
	autoComplete?: string
}

export function TextInput(props: InputProps) {
	return (
		<Input
			placeholder={props.placeholder}
			style={props.style}
			keyboardType={props.keyboardType}
			autoComplete={props.autoComplete}
		></Input>
	)
}
