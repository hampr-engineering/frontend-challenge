import styled from "@emotion/styled";
import type { ButtonProps } from "./Button";
import { COLOR } from "../../variables";

const { blue, white } = COLOR;

const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${({ active }) => (active ? blue : white.normal)};
  color: ${({ active }) => (active ? white.normal : blue)};
  border: 1px ${blue} solid;
  cursor: pointer;
  padding: 1px 12px 0 12px;
  border-radius: 20px;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 30px;
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    margin: 0 2px 0 -6px;
  }
`;

export default ButtonWrapper;
