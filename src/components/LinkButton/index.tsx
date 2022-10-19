import React, { useCallback } from "react"

import { Alert, Linking, Button, TouchableHighlight, TouchableOpacity } from "react-native"

// import { styles } from "./styles"

interface LinkProps {
	children: React.ReactNode
	url: string
}

export function LinkButton(props: LinkProps) {
	const handlePress = useCallback(async () => {
		
		await Linking.openURL(props.url)
		
		// Checking if the link is supported for links with custom URL scheme.
		// const supported = await Linking.canOpenURL(props.url)
		// if (supported) {
		// 	// Opening the link with some app, if the URL scheme is "http" the web link should be opened
		// 	// by some browser in the mobile
		// 	await Linking.openURL(props.url)
		// } else {
		// 	Alert.alert(`Don't know how to open this URL: ${props.url}`)
		// }
	}, [props.url])

	return (
		<TouchableOpacity onPress={handlePress}>
			{props.children}
		</TouchableOpacity>
	)
}
