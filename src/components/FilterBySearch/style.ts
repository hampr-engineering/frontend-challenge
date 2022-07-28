import styled from "@emotion/styled";
import { COLOR } from "../variables";

const FilterBySearchWrapper = styled.section`
  max-width: 500px;
  margin: 80px auto 0 auto;
  position: relative;

  .input {
    background-color: ${COLOR.white.normal};
    outline-color: ${COLOR.blue};
    border: 1px ${COLOR.grey} solid;
    display: block;
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
    padding: 6px 6px 6px 40px;
    line-height: 30px;
    position: relative;
    z-index: 2;

    &::placeholder {
      font-weight: 300;
    }
  }

  svg {
    display: block;
    width: 27px;
    position: absolute;
    z-index: 3;
    top: 9px;
    left: 9px;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.25);
    width: 150%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default FilterBySearchWrapper;
