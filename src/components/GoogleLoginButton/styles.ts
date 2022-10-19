import styled from "styled-components/native"

export const CustomButton = styled.View`
	background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 5px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
