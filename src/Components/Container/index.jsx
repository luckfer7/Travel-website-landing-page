import styled from "styled-components";

const StyledDiv = styled.div`
    
    width: 60%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
`

const Container = ({ children }) => {
    return (
        <StyledDiv>{children}</StyledDiv>
        //<div>{children}</div>
    )
}

export default Container;