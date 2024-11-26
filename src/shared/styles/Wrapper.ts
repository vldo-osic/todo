import styled from "styled-components";

export const Wrapper = styled.section<{
  $display?: string
}>`
  display: ${props => props.$display || "block"};
  padding : 10px;
  background: papayawhip;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border: 2px solid #BF4F74;
`;