import styled from "styled-components";

const Text = styled.p`
    color: ${(props) => props.color || ''};
    border-right: ${(props) => props.border || ''};
    padding-right: ${(props) => props.padding || ''};
    font-size: ${(props) => props.font || ''};
`;

export default Text;