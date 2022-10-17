import styled from "styled-components/native"

export const Input = styled.View`
	flex-direction: row;
	width: 100%;
	height: 60px;
	padding: 0 16px;
	background: ${({ theme }) => theme.COLORS.DARKGRAY};
	border-radius: 10px;
	margin-bottom: 8px;
	font-size: 16px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`
