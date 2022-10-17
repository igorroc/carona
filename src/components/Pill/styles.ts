import styled from "styled-components/native"

export const Wrapper = styled.View`
	/* flex: 1;*/
	width: 100%; 
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0px 20px 0px 10px;
	gap: 10px;
`

export const Name = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	/* font-weight: bold; */
	font-family: ${({ theme }) => theme.FONTS.REGULAR};
	font-size: ${({ theme }) => theme.FONTSIZES.H7}px;
	word-wrap: normal;
	word-break: keep-all;
	flex: 1;
	width: 100%;
`

export const Avatar = styled.Image`
	width: ${({ theme }) => theme.SIZES.BASE * 3}px;
	height: ${({ theme }) => theme.SIZES.BASE * 3}px;
`
