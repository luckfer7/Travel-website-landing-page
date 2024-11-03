import styled from "styled-components";
import microphone from '../../../../public/microphone.png'
import ContainerTitle from "../../ContainerTitle";
import Paragraph from "../../Paragraph";

const StyledCategoryThree = styled.div`
    width: 20%;
    height: 60%;
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    img {
        width: 67px;
        height: 75px;
        margin-top: 49px;
    }

    @media screen and (max-width: 390px) {
        width: 100%;

        
    }
`

const CategoryThree = () => {
    return (
        <>
            <StyledCategoryThree>
                <img src={microphone} alt="" />
                <ContainerTitle>Local Events</ContainerTitle>
                <Paragraph>Barton vanity itself do in it. Preferd to men it engrossed listening.</Paragraph>
            </StyledCategoryThree>
        </>
    )
}

export default CategoryThree;