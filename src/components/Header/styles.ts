import styled from "styled-components/native"

export const Wrapper = styled.View`
	flex: 1;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-height: 100px;
`

export const Sub = styled.Text`
	font-size: ${({ theme }) => theme.FONTSIZES.H8}px;
	font-family: ${({ theme }) => theme.FONTS.LIGHT};
	color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.FONTSIZES.H5}px;
	font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
	color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Saldo = styled.View`
	align-items: flex-end;
`
