import styled from "styled-components";

const Text = styled.p`
    color: ${(props) => props.color || ''};
    border-right: ${(props) => props.border || ''};
    padding-right: ${(props) => props.padding || ''};
    font-size: ${(props) => props.font || ''};
    line-height: ${(props) => props.lineHeight || ''};
    margin: ${(props) => props.margin || ''};
`;

export default Text;