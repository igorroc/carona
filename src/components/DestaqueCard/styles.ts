import styled from "styled-components/native"

import Theme from "../../theme"

export const Wrapper = styled.View`
	background-color: ${Theme.COLORS.PRIMARY};
	flex: 1;
	margin: 0 20px;
`

export const Name = styled.Text`
	font-family: ${Theme.FONTS.SEMIBOLD};
	font-size: ${Theme.FONTSIZES.H8}px;
	color: ${Theme.COLORS.WHITE};
`

export const Description = styled.Text``
