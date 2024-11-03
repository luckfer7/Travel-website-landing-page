import styled from "styled-components";
import Jadoo from '../../../public/Jadoo.svg';
import './styles.css';


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    padding: 2em 0;

    @media screen and (max-width: 390px) {
        width: 100%;

        img {
            height: 60px;
        }
    }
`

const StyledNav = styled.nav`
    width: 80%;
`

const Header = () => {
    return (
        <>
            <StyledHeader>
                
                <img src={Jadoo} alt="" />
                <StyledNav>
                
                    <ul >
                        <li >
                            <a className="anchor" href="">Destinations</a>
                        </li>
                        <li>
                            <a className="anchor" href="">Hotels</a>
                        </li>
                        <li>
                            <a className="anchor" href="">Flights</a>
                        </li>
                        <li>
                            <a className="anchor" href="">Bookings</a>
                        </li>
                        <li>
                            <a className="anchor" href="">Login</a>
                        </li>
                        <li className="signup">
                            <a className="anchor" href="">Sign Up</a>
                        </li>
                    </ul>
                </StyledNav>
                
            </StyledHeader>
        </>
    )
};

export default Header;