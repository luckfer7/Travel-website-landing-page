import styled from "styled-components";
import StyledSphericalBox from "../SphericalBox";
import StyledFooterTitles from "../FooterTitles";
import StyledAnchors from "../Anchors";
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
import twitter from '../../../public/twitter.png'
import google from '../../../public/google.png'
import apple from '../../../public/apple.png'


const StyledFooter = styled.footer`
    /* border: 3px solid black; */
    display: flex;
    justify-content: space-around;
    padding: 80px 0;


    .footer__title {
        font-size: 44px;
        color: #181E4B;
        margin-bottom: 19px;
    }

    .paragraphs {
        font-size: 13px;
        width: 60%;
        line-height: 20px;
        color: #5E6282;
    }

    .discover {
        font-size: 20px;
        color: #5E6282;
        padding: 15px 0;
        margin-left: 9px;
    }

    img:nth-child(5) {
        margin-right: 7px;
    }
`;

const Footer = () => {
    return(
        <>
            <StyledFooter>
                <StyledSphericalBox
                    display="flex"
                    direction="column"
                >
                    <h3 className="footer__title">Jadoo.</h3>
                    <p className="paragraphs">Book your trip in minute, get full Control for much longer.</p>
                </StyledSphericalBox>
                <StyledSphericalBox 
                     display="flex"
                    direction="column"
                >
                    <StyledFooterTitles>Company</StyledFooterTitles>
                    <StyledAnchors>About</StyledAnchors>
                    <StyledAnchors>Career</StyledAnchors>
                    <StyledAnchors>Mobile</StyledAnchors>
                </StyledSphericalBox>
                <StyledSphericalBox 
                     display="flex"
                    direction="column"
                >
                    <StyledFooterTitles>Contact</StyledFooterTitles>
                    <StyledAnchors>Help/FAQ</StyledAnchors>
                    <StyledAnchors>Press</StyledAnchors>
                    <StyledAnchors>Affilate</StyledAnchors>
                </StyledSphericalBox>
                <StyledSphericalBox
                    display="flex"
                    direction="column"
                >
                    <StyledFooterTitles>More</StyledFooterTitles>
                    <StyledAnchors>Airlinefees</StyledAnchors>
                    <StyledAnchors>Airline</StyledAnchors>
                    <StyledAnchors>Low fare tips</StyledAnchors>
                </StyledSphericalBox>
                <StyledSphericalBox
                    textalign="left"
                >
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <p className="discover">Discover our app</p>
                    <img src={google} alt="" />
                    <img src={apple} alt="" />
                </StyledSphericalBox>

            </StyledFooter>
        </>
    )
}

export default Footer;