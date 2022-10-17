import styled from "styled-components/native"

export const Row = styled.View.attrs(() => ({ tabIndex: 0 }))`
	position: relative;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #fff;
`
