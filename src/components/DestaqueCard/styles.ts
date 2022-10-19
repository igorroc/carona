import styled from "styled-components/native"

export const Flex = styled.View`
	margin: 0 10px;
`

export const IconWrapper = styled.View`
	align-self: flex-start;
	justify-content: center;
	align-items: center;
	background-color: #fff3;
	padding: 20px;
	border-radius: 10px;
`

export const Wrapper = styled.View`
	margin: 20px;
	justify-content: center;
	gap: 100px;
	min-width: 140px;
`

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
	font-size: ${({ theme }) => theme.FONTSIZES.H8}px;
	color: ${({ theme }) => theme.COLORS.WHITE};
	margin: 10px 0;
`

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.FONTS.REGULAR};
	font-size: ${({ theme }) => theme.FONTSIZES.H8}px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`
