import styled from "styled-components";
import StyledSphericalBox from "../SphericalBox";
import greece from '../../../public/greece.png';


const StyledImageContainer = styled.div`
    height: 80%;
    width: 50%;
    border: 2px solid black;
    margin: 0 auto;
    align-content: center;

    .box {
        display: flex;
        flex-direction: column;
        padding: 1.5em;
    }

    img {
        height: 161px;
        
    }
    
    h5 {
        font-size: 18px;
        color: #080809;
    }
`;

const ImageContainer = () => {
    return (
        <>
            <StyledImageContainer>
               <StyledSphericalBox
                className="box"
                width="60%"
                height="70%"
                radius="26px"
                shadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"
               > 
                 <img src={greece} alt="" />
                 <h5>Trip to Greece</h5>
               </StyledSphericalBox>
            </StyledImageContainer>
        </>
    )
}

export default ImageContainer;