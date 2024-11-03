import styled from "styled-components";
import StyledSphericalBox from "../SphericalBox";
import greece from '../../../public/greece.png';
import Text from "../Text";
import leaf from '../../../public/LEAF.png'
import map from '../../../public/map icon.png'
import send from '../../../public/send.png'
import building from '../../../public/building.png'


const StyledImageContainer = styled.div`
    height: 80%;
    width: 50%;
    /* border: 2px solid black; */
    margin: 0 auto;
    align-content: center;

    .box {
        display: flex;
        flex-direction: column;
        padding: 1.5em;
    }

    .greece {
        height: 161px;
        
    }
    
    h5 {
        font-size: 18px;
        color: #080809;
    }

    div {
        display: flex;
        gap: 15px;
    }

    .little__icons {
        height: 31px;
        width: 31px;
    }

    .building__icons {
        width: 16px;
        height: 16px;
    }


    @media screen and (max-width: 390px) {
        width: 100%;

        .box {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            width: 100%;
            padding-bottom: 10px;
            text-align: center;
        }

        div {
            justify-content: center;
            gap: 15px;
        }
    }
`;

const ImageContainer = () => {
    return (
        <>
            <StyledImageContainer>
               <StyledSphericalBox
                className="box"
                width="50%"
                height="55%"
                radius="26px"
                shadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(60, 125, 182, 0.22) 20px 0px 20px 0px;"
                margin="0 auto"
                
               > 
                 <img className="greece" src={greece} alt="" />
                 <h5>Trip to Greece</h5>
                 <div>
                    <Text
                        color="#84829A"
                        border="1px solid #84829A"
                        padding="10px"
                        font="16px"
                    >14-29 june</Text>
                    <Text
                        color="#84829A"
                    >By Robin Joo</Text>
                 </div>
                 <div>
                    <img className="little__icons" src={leaf} alt="" /><img className="little__icons" src={map} alt="" /><img className="little__icons" src={send} alt="" />
                 </div>
                 <div>
                    <img className="building__icons" src={building} alt="" />
                    <Text
                        color="#84829A"
                        font="16px"
                    >24 people going</Text>
                 </div>
               </StyledSphericalBox>
            </StyledImageContainer>
        </>
    )
}

export default ImageContainer;