import styled from "styled-components/native"

import Theme from "../../theme"

export const Input = styled.TextInput.attrs((props) => ({
	placeholderTextColor: Theme.COLORS.WHITE50,
}))`
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: ${Theme.COLORS.WHITE10};
	border-radius: 10px;
	margin-bottom: 8px;
	font-size: 16px;
	color: ${Theme.COLORS.WHITE};
	::placeholder {
		color: ${Theme.COLORS.WHITE50};
	}
`
