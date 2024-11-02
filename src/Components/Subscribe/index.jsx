
import MainTitle from "../MainTitle";
import StyledSphericalBox from "../SphericalBox";
import './index.css'
const Subscribe = () => {
    return (
        <>
            <StyledSphericalBox
                width="90%"
                background="#DFD7F9"
                margin="0 auto"
                radius="20px"
                display="flex"
                direction="column"
                justifycontent="center"
                align="center"
                padding="7rem 0"
                gap="7rem"
                
            >
                <MainTitle className="title">Subscribe to get information, latest news and other
                interesting offers about Jadoo</MainTitle>
                
                    <form action="">
                        <input type="text" placeholder="Your email"/>
                       <button className="button">Subscribe</button>
                    </form>
           
            </StyledSphericalBox>
        </>
    )
}

export default Subscribe;