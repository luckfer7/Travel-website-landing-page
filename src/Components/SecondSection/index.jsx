import styled from "styled-components";
import image from "../../../public/Image.svg";
const StyledSecondSection = styled.section`
    width: 85%;
    margin: 0 auto;
    border: 3px solid;
    display: flex;

    div {
        border: 2px solid;
        width: 50%;
    }

    h1 {
        font-size: 84px;
        line-height: 89px;
        font-style: bold;
        letter-spacing: 4%;
    }

    img {
        width: 50%;
    }
    
`
const SecondSection = () => {
    return (
        <>
            <StyledSecondSection>
                <div>
                    <b>BEST DESTINATIONS AROUND THE WORLD</b>
                    <h1>Travel, enjoy and live a new and full life</h1>
                    <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <img src={image} alt="" />

            </StyledSecondSection>
        </>
    )
}

export default SecondSection;