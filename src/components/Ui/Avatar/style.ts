import styled from "@emotion/styled";
import { COLOR } from "../../variables";

type AvatarWrapperProps = {
  widthHeight: string;
  onClick?: () => void;
};

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  max-width: ${({ widthHeight }) => widthHeight};
  max-height: ${({ widthHeight }) => widthHeight};
  border: 1px ${COLOR.blue} solid;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // only show overlay on hover if clickable
  ${({ onClick }) =>
    onClick &&
    `&::after {
      content: "Remove";
      background-color: rgba(33, 122, 255, 0.75);
      color: ${COLOR.white.normal};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s ease-in-out;
      opacity: 0;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
      cursor: pointer;
    }
  
    &:hover {
    &::after {
      opacity: 1;
    }
  }
  `}
`;

export default AvatarWrapper;
