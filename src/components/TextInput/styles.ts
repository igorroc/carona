import styled from "styled-components/native"

import Theme from "../../theme"

export const Input = styled.TextInput.attrs({
	placeholderTextColor: Theme.COLORS.WHITE50
})`
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: ${Theme.COLORS.DARKGRAY};
	border-radius: 10px;
	margin-bottom: 8px;
	font-size: 16px;
	color: ${Theme.COLORS.WHITE};
	font-family: ${Theme.FONTS.REGULAR};
	
`
