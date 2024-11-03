import StyledSphericalBox from "../SphericalBox";
import axon from '../../../public/axon.png'
import jetstar from '../../../public/jetstar.png'
import expedia from '../../../public/expedia.png'
import qantas from '../../../public/qantas.png'
import alitalia from '../../../public/alitalia.png'

const ContainerCompanies = () => {

    return(
      <>
        <StyledSphericalBox
            width="80%"
            // border="2px solid blue"
            margin="15rem auto"
            display="flex"
            justifycontent="space-between"
            align="center"
            padding="2rem"
           
        >
            <img src={axon} alt="" height={39} width={130} />
            <img src={jetstar} alt="" height={40} width={133} />
            <img src={expedia} alt="" height={55} width={162} />
            <img src={qantas} alt="" height={32} width={130} />
            <img src={alitalia} alt="" height={21} width={94} />
        </StyledSphericalBox>
    </>  
    )
    
}

export default ContainerCompanies;