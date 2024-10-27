import styled from "styled-components";
import tool from '../../../../public/tool.png'
import ContainerTitle from "../../ContainerTitle";
import Paragraph from "../../Paragraph";

const StyledCategoryFour = styled.div`
    width: 20%;
    height: 60%;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    img {
        width: 77px;
        height: 66px;
        margin-top: 59px;
    }
`

const CategoryFour = () => {
    return(
        <>
            <StyledCategoryFour>
                <img src={tool} alt="" />
                <ContainerTitle>Local Events</ContainerTitle>
                <Paragraph>Barton vanity itself do in it. Preferd to men it engrossed listening.</Paragraph>
            </StyledCategoryFour>
        </>
    )
}

export default CategoryFour;