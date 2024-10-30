import destination from '../../../public/destination.png'
import payment from '../../../public/payment.png';
import reach from '../../../public/reach.png';
import styled from "styled-components";
import MinorTitle from '../MinorTitle';
import MainTitle from '../MainTitle';


const StyledBookingTripContainer = styled.div`
    height: 80%;
    width: 50%;
    border: 2px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;


    .minortle {
        margin-left: 8rem;
    }

    .title {
       margin-left: 8rem;
       padding: 0 3rem 0 0;
    }

    .value{
        display: flex;
        gap: 19px;
        margin-top: 50px;
        width: 55%;
        margin-left: 8rem;
    }

    .ttle {
        font-weight: bold;
        margin-bottom: 4px;
    }

    .paragraph {
        color: #5E6282;
        font-size: 16px;
        
    }
    
    img {
        height: 47px;
        width: 47px;
    }

    
`;

const BookingTripContainer = () => {
    return (
        <>
            <StyledBookingTripContainer>
                <MinorTitle className='minortle'
                >Easy and Fast</MinorTitle>
                <MainTitle className='title'>Book your next trip 
                in 3 easy steps</MainTitle>
                    <div className='value'>
                        <img src={destination} alt="" />
                        <div >
                            <p className='paragraph ttle'>Choose Destination</p>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='value'>
                        <img src={payment} alt="" />
                        <div>
                            <p className='paragraph ttle'>Make Payment</p>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='value'>
                        <img src={reach} alt="" />
                        <div>
                            <p className='paragraph ttle'>Reach Airport on Selected Date</p>
                            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
            </StyledBookingTripContainer>
        </>
    )
}

export default BookingTripContainer;