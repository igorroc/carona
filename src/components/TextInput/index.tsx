import React from "react"

import { Input } from "./styles"

interface InputProps {
	placeholder?: string
	style?: object
	keyboardType?:
		| "default"
		| "number-pad"
		| "decimal-pad"
		| "numeric"
		| "email-address"
		| "phone-pad"
	autoComplete?: string
	value?: string
	editable?: boolean
	onChangeText?: Function | Array<Function>
}

export function TextInput(props: InputProps) {
	return (
		<Input
			placeholder={props.placeholder}
			style={props.style}
			keyboardType={props.keyboardType}
			autoComplete={props.autoComplete}
			value={props.value}
			editable={props.editable}
			onChangeText={props.onChangeText}
		/>
	)
}
