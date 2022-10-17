import styled from "styled-components/native"

export const Flex = styled.View`
	margin: 0 10px;
`

export const TopWrapper = styled.View`
	height: 100%;
	justify-content: center;
	/* align-items: center; */
`

export const Wrapper = styled.View`
	margin: 20px;
	justify-content: center;
`

export const Name = styled.Text`
	font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
	font-size: ${({ theme }) => theme.FONTSIZES.H8}px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.FONTS.REGULAR};
	font-size: ${({ theme }) => theme.FONTSIZES.H8}px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`
