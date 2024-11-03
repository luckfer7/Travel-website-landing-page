import styled from "styled-components";
import MinorTitle from "../MinorTitle";
import NavigationIcon from "../../../public/navigationicon.png"
import Rome from "../../../public/rome.png"
import london from "../../../public/london.png"
import europe from "../../../public/europe.png"
import NameDestinationTitle from "../NameDestination";

const SphericalContainer = styled.div`
    width: 25%;
    height: 98%;
    /* border: 2px solid blue; */
    border-radius: 24px;
    box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;

    .place {
        width: 100%;
        height: 80%;
    }

    .titulos {
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }

    .navig {
        display: flex;
        padding: 0 0 0 1rem;
        gap: 0.5rem;
        margin-top: 0.8rem;
    }

    @media screen and (max-width: 390px) {
        width: 100%;
        
        .navig {
           margin-bottom : 10px;
        }
    }
`;

const StyledSphericalContainer = () => {
    return (
        <>
            <SphericalContainer>
                <img className="place" src={Rome} alt="" />
                <div className="titulos">
                    <MinorTitle>Rome, Italty</MinorTitle>
                    <MinorTitle>$5,42k</MinorTitle>
                </div>
                <div className="navig">
                    <img src={NavigationIcon} alt="" />
                    <NameDestinationTitle>10 Days Trip</NameDestinationTitle>
                </div>
            </SphericalContainer>

            <SphericalContainer>
                <img className="place" src={london} alt="" />
                <div className="titulos">
                    <MinorTitle>Rome, Italty</MinorTitle>
                    <MinorTitle>$5,42k</MinorTitle>
                </div>
                <div className="navig">
                    <img src={NavigationIcon} alt="" />
                    <NameDestinationTitle>10 Days Trip</NameDestinationTitle>
                </div>
            </SphericalContainer>

            <SphericalContainer>
                <img className="place" src={europe} alt="" />
                <div className="titulos">
                    <MinorTitle>Rome, Italty</MinorTitle>
                    <MinorTitle>$5,42k</MinorTitle>
                </div>
                <div className="navig">
                    <img src={NavigationIcon} alt="" />
                    <NameDestinationTitle>10 Days Trip</NameDestinationTitle>
                </div>
            </SphericalContainer>
        </>
    )
}

export default StyledSphericalContainer;