import {Button} from "components";
import styled from "styled-components";

export const CallToActionButton = styled(Button)`
  height: 5rem;
  cursor: pointer;
  min-width: fit-content;
  border: none;
  outline: none;
  letter-spacing: 0.2px;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    color: black;
    background: #f7d590;
  }
`;
