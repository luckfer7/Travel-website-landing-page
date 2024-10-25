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
                            <a href="">Destinations</a>
                        </li>
                        <li>
                            <a href="">Hotels</a>
                        </li>
                        <li>
                            <a href="">Flights</a>
                        </li>
                        <li>
                            <a href="">Bookings</a>
                        </li>
                        <li>
                            <a href="">Login</a>
                        </li>
                        <li className="signup">
                            <a href="">Sign Up</a>
                        </li>
                    </ul>
                </StyledNav>
                
            </StyledHeader>
        </>
    )
};

export default Header;