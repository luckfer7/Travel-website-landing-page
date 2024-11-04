import styled from "styled-components";
//import retangulo from '../../../../public/Rectangle 157.png'

const ContainerCategories = styled.div`
    /* border: 2px solid brown; */
    width: 95%;
    margin-top: 30px;
    height: 70%;
    display: flex;
    justify-content: center;
    gap: 60px;
    background-image: ${({ showRectangle }) => showRectangle ? "url('../../../../public/Rectangle 157.png')" : "none"};
    background-repeat: no-repeat;
    background-position: right 830px bottom;

    @media screen and (max-width: 390px) {
        flex-direction: column;

        height: auto;
    }
`

export default ContainerCategories;