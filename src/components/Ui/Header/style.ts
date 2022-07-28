import styled from "@emotion/styled";
import { COLOR } from "../../variables";

const HeaderWrapper = styled.header`
  background-color: ${COLOR.black};
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  .logo {
    width: 140px;
    display: block;
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  }
`;

export default HeaderWrapper;
