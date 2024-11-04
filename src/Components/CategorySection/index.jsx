import styled from "styled-components";

const CategorySection = styled.section`
    width: 85%;
    margin: 0 auto;
    /* border: 3px solid yellow; */
    margin-top: 30px;
    display: flex;
    flex-direction: ${ ({changeDirection}) => changeDirection ? "row" : "column"} ;
    align-items: center;
    margin-top: 200px;


    @media screen and (max-width: 390px) {
        flex-direction: column;
    }

`;

export default CategorySection;