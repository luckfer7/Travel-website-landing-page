import styled from "styled-components";


const StyledButton = styled.button`
    border-radius: 10px;
    padding: 12px 20px;
    border: 0;
    cursor: pointer;
    font-size: 14px;
    ${({PersonalizedButton}) => PersonalizedButton && PersonalizedButton}
    ${({SecondPersonalizedButton}) => SecondPersonalizedButton && SecondPersonalizedButton}
`;

const Button = ({children, PersonalizedButton, SecondPersonalizedButton}) => {
    return (

        <StyledButton SecondPersonalizedButton={SecondPersonalizedButton} PersonalizedButton={PersonalizedButton}>{children}</StyledButton>
        // <button>{children}</button>
    )
}

export default Button;