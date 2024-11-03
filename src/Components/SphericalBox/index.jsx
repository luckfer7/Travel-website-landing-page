import styled from "styled-components";

const StyledSphericalBox = styled.div`
   height: ${(props) => props.height || ''};
   width: ${(props) => props.width || ''};
   border-radius: ${(props) => props.radius || ''};
   box-shadow: ${(props) => props.shadow || ''};
   margin: ${(props) => props.margin || ''} ;
   background-color: ${(props) => props.background || ''};
   padding: ${(props) => props.padding || ''}; 
   border: ${(props) => props.border || ''};
   position: ${(props) => props.position || ''};
   z-index: ${(props) => props.zindex || ''};
   display: ${(props) => props.display || ''};
   justify-content: ${(props) => props.justifycontent || ''};
   align-items: ${(props) => props.align || ''};
   flex-direction: ${(props) => props.direction || ''};
   gap: ${(props) => props.gap || ''};
   text-align: ${(props) => props.textalign || ''};

  
   
   `

export default StyledSphericalBox;