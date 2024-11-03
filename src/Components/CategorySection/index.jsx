import styled from "styled-components";

const CategorySection = styled.section`
    width: 85%;
    margin: 0 auto;
    /* border: 3px solid yellow; */
    margin-top: 30px;
    height: 100vh;
    display: flex;
    flex-direction: ${ ({changeDirection}) => changeDirection ? "row" : "column"} ;
    align-items: center;
`;

export default CategorySection;