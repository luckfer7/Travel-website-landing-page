import styled from "styled-components";

const StyledDiv = styled.div`
    
    width: 60%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;

    @media screen and (max-width: 390px) {
        justify-content: center;
        flex-direction: column;
        
    }
`

const Container = ({ children }) => {
    return (
        <StyledDiv>{children}</StyledDiv>
        //<div>{children}</div>
    )
}

export default Container;