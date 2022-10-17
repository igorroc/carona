import styled from "styled-components/native"

export const Table = styled.View`
	flex: 1;
	width: 100%;
	margin-top: 20px;
`

export const TableHeader = styled.View`
	flex-direction: row;
	width: 100%;
	height: 50px;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const TableHeaderText = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-family: ${({ theme }) => theme.FONTS.BOLD};
	font-size: ${({ theme }) => theme.FONTSIZES.H7}px;
`
