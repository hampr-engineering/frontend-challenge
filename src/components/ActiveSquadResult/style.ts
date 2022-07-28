import styled from "@emotion/styled";
import { COLOR } from "../variables";

const ActiveSquadResultWrapper = styled.section`
  margin: 60px auto 0 auto;
  max-width: 680px;

  .heading {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
  }

  .characters {
    display: flex;
    justify-content: center;
    margin: 24px 0 0 0;

    &__each {
      margin: 0 6px;
    }
  }

  .metrics {
    display: flex;
    justify-content: center;
    margin: 24px 0 0 0;
    position: relative;

    &__each {
      padding: 18px;
      text-align: center;
      width: 20%;

      .label {
        font-weight: 300;
        font-size: 0.9rem;
      }

      .value {
        font-weight: 700;
        font-size: 1.3rem;
        margin: 18px 0 0 0;
      }

      &:nth-of-type(3) {
        border-left: 1px rgba(0, 0, 0, 0.25) solid;
        border-right: 1px rgba(0, 0, 0, 0.25) solid;
      }
    }

    &__footnote {
      color: ${COLOR.grey};
      font-size: 0.725rem;
      font-weight: 300;
      position: absolute;
      left: 48px;
      bottom: -20px;
    }
  }

  .clear-btn {
    color: ${COLOR.grey};
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    margin: 24px auto 0 auto;
    text-align: center;
    max-width: max-content;

    &:hover {
      color: ${COLOR.black};
    }
  }
`;

export default ActiveSquadResultWrapper;
