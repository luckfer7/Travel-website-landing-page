import styled from "styled-components";
import image from "../../../public/Image.svg";
import Button from "../Button/Button";
import Container from "../Container";
import playbutton from '../../../public/botao-play.png'

const StyledSecondSection = styled.section`
    width: 85%;
    margin: 0 auto;
    /* border: 3px solid; */
    display: flex;
    align-items: center;

    

    .container {
        /* border: 2px solid; */
        width: 50%;
        padding: 10px 0px 0px 10px;

    }


    b {
        color: #DF6951;
    }

    h1 {
        font-size: 84px;
        line-height: 89px;
        font-style: bold;
        letter-spacing: 4%;
        color: #181E4B;
    }

    p {
        color: #5E6282;
        line-height: 30px;
        width: 65%;
    }

    .imgbtnplay {
        width: 30px;
        height: 30px;
        

    }

    img {
        width: 50%;
    
    }

    @media screen and (max-width: 390px) {
        flex-direction: column-reverse;
        width: 100%;

        .container {
            width: 100%;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        b {
            font-size: 16px;
            margin: 0 0 30px 0;
            text-align: center;
        }

        h1 {
            text-align: center;
            margin: 0 0 30px 0;
            font-size: 32px;
            line-height: 40px;

        }

        p {
            font-size: 20px;
            width: 90%;
            margin: 0 0 30px 0;
            line-height: 30px;
            text-align: center;
        }

        img {
            display: none;
        }

        .ff{
            background-color: #181E4B;
        }
    }

    
    
`
const SecondSection = () => {
    return (
        <>
            <StyledSecondSection>
                <div className="container">
                    <b>BEST DESTINATIONS AROUND THE WORLD</b>
                    <h1>Travel, enjoy and live a new and full life</h1>
                    <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    
                    <Container>
                        <Button 
                            PersonalizedButton=
                            "background-color: #F1A501;color: #ffffff; @media screen and (max-width: 390px)"
                        >
                            Find out more
                        </Button>
                        
                        <Button 
                            SecondPersonalizedButton="background-color: #ffffff; ; display: flex;align-items: center; gap: 16px; padding: 6px 20px;"> 
                            <img className="imgbtnplay" src={playbutton} alt="" />
                            Play Demo</Button>
                    </Container>
                    
                    
                    
                </div>
                <img src={image} alt="" />

            </StyledSecondSection>
        </>
    )
}

export default SecondSection;