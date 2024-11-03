import styled from "styled-components";
import group48 from '../../../../public/Group 48.png';
import '../../ContainerTitle/index';
import ContainerTitle from "../../ContainerTitle/index";
import Paragraph from "../../Paragraph";

const StyledCategory = styled.div`
    width: 20%;
    height: 60%;
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    img {
        width: 92px;
        height: 78px;
        margin-top: 49px;
    }

    @media screen and (max-width: 390px) {
        width: 100%;
    }
`

const Category = () => {
    return(
        <>
            <StyledCategory>
                <img src={group48} alt="" />
                <ContainerTitle>Calculated Weather</ContainerTitle>
                <Paragraph>Built Wicket longer admire do barton vanity itself do in it.</Paragraph>
            </StyledCategory>
        </>
    )
}


export default Category;