import styled from "styled-components";
import Group51 from '../../../../public/Group 51.png';
import ContainerTitle from "../../ContainerTitle";
import Paragraph from "../../Paragraph";

const StyledCategoryTwo = styled.div`
   width: 20%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 6px 2px;
    gap: 9px;
    border-radius: 36px;
    background-color: #ffffff;

    img {
        width: 137px;
        height: 122px;
        margin-top: 19px;
    }

    @media screen and (max-width: 390px) {
        width: 100%;
        padding-bottom: 20px;

        img {
            margin-top: 0;
        }
          
    }

`

const CategoryTwo = () => {
    return(
        <>
            <StyledCategoryTwo>
                <img src={Group51} alt="" />
                <ContainerTitle>Best Flights</ContainerTitle>
                <Paragraph>Engrossed listening. Park gate sell they west hard for the.</Paragraph>
            </StyledCategoryTwo>
            
        </>
    )
}

export default CategoryTwo;