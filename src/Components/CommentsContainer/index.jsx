import styled from "styled-components";
import MinorTitle from "../MinorTitle";
import MainTitle from "../MainTitle";
import StyledSphericalBox from "../SphericalBox";
import Text from "../Text";
import men from '../../../public/men.png'

const StyledCommentsContainer = styled.div`
    /* border: 2px solid green; */
    width: 50%;
    height: 70%;
    padding: 6rem 4rem 0 3rem;
    
    img {
        height: 65px;
        width: 65px;
        position: relative;
        z-index: 3;
        right: 5%;
        top: 6%;
    }

    .first {
        z-index: 2;        
    }


    .second {
        z-index: 1;
        left: 7%;
        bottom: 15%;
    }

    @media screen and (max-width: 390px) {
        width: 100%;
        padding: 0;
        
        .first {
            width: 100%;
            z-index: 2;   
            position: relative;
        }

        .second {
            width: 100%;
            z-index: 1;
            left: 7%;
            bottom: 30%;
            position: relative;
        }

        img {
            height: 65px;
            width: 65px;
            z-index: 3;
            right: 5%;
            top: 6%;
            position: relative; 
        }
    }
   
`;

const CommentsContainer = () =>{
    return(
        <>
            <StyledCommentsContainer>
                <MinorTitle>Testimonials</MinorTitle>
                <MainTitle>What people say about Us.</MainTitle>
            </StyledCommentsContainer>
            <StyledCommentsContainer>
                <img src={men} alt="" />
                <StyledSphericalBox className="first"
                    shadow=" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                    radius="10px"
                    width="60%"
                    background="#ffffff"
                    padding="20px 30px 20px 20px"
                    position="relative"

                >
                    <Text
                        font="16px"
                        color="#5E6282"
                        lineHeight="32px"
                        margin="0 0 19px 0"
                    >“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</Text>
                    <MinorTitle>Mike taylor</MinorTitle>
                    <Text 
                        font="14px"
                        color="#5E6282"
                        margin="7px 0 0 0"
                    >Lahore, Pakistan</Text>
                </StyledSphericalBox>
                <StyledSphericalBox className="second"
                    radius="10px"
                    width="60%"
                    padding="20px 30px 20px 20px"
                    border="3px solid #F7F7F7"
                    background="#F7F7F7"
                    position="relative"
                    
                >
                <Text>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</Text>
                    <MinorTitle>Chris Thomas</MinorTitle>
                    <Text
                        font="14px"
                        color="#5E6282"
                        margin="7px 0 0 0"
                    >CEO of Red Button</Text>
                </StyledSphericalBox>

            </StyledCommentsContainer>
        </>
    )
}

export default CommentsContainer;