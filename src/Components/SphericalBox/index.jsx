import styled from "styled-components";

const StyledSphericalBox = styled.div`
   height: ${(props) => props.height || ''};
   width: ${(props) => props.width || ''};
   border-radius: ${(props) => props.radius || ''};
   box-shadow: ${(props) => props.shadow || ''};
`

export default StyledSphericalBox;