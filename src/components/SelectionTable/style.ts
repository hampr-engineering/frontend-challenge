import styled from "@emotion/styled";
import { COLOR } from "../variables";

const SelectionTableWrapper = styled.div`
  max-width: 1100px;
  margin: 48px auto 0 auto;

  .table {
    width: 100%;
    border-radius: 0 0 12px 12px;
    overflow: hidden;
    box-shadow: 0 4px 2px -2px rgba(33, 33, 33, 0.1);

    &__thead {
      .th {
        text-align: left;
        padding: 0 0 18px 0;
        font-weight: 300;
        font-size: 0.9rem;

        &--characters {
          padding: 0 0 0 21px;
        }

        &--center {
          text-align: center;
        }
      }
    }

    &__tbody {
      .row {
        cursor: pointer;
        background-color: ${COLOR.white.normal};
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: ${COLOR.white.dirty};
        }

        &--active {
          background-color: ${COLOR.white.sky};

          &:hover {
            background-color: ${COLOR.white.sky};
          }
        }

        &:first-of-type {
          td {
            &:first-of-type {
              border-radius: 10px 0 0 0;
            }

            &:last-of-type {
              border-radius: 0 10px 0 0;
            }
          }
        }

        &:last-of-type {
          border-bottom: initial;
        }
      }

      .col {
        padding: 13px 0;

        .flex-wrap {
          display: flex;
          align-items: center;
          max-width: max-content;
        }

        &--characters {
          padding: 13px;

          .checkbox {
            border: 1px ${COLOR.blue} solid;
            cursor: pointer;
            width: 18px;
            height: 18px;
            border-radius: 2px;
            appearance: none;
            margin: 0 18px 0 9px;

            &:checked {
              appearance: auto;
            }
          }

          .name {
            font-weight: 400;
            font-size: 1.1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 140px;
            margin: 0 0 -1px 13px;
            line-height: 1.5;
          }
        }

        &--tags {
          min-width: 260px;
          max-width: 260px;

          button {
            margin: 0 10px 0 0;

            &:last-child {
              margin: 0;
            }
          }
        }

        &--abilities {
          min-width: 100px;

          .score {
            font-weight: 400;
            font-size: 1.1rem;
            text-align: center;

            &--red {
              color: ${COLOR.red};
            }
          }
        }

        &--empty {
          text-align: center;
        }
      }
    }
  }

  .feedback {
    text-align: center;
    margin: 108px 0 0 0;

    p {
      font-weight: 300;
      font-size: 1.2rem;
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
  }

  .pagination {
    display: flex;
    margin: 24px 0 0 0;

    &__each-btn {
      background-color: transparent;
      border: 0;
      line-height: 30px;
      cursor: pointer;
      font-weight: 300;
      margin: 0 18px 0 0;

      &--active {
        cursor: auto;
        text-decoration: underline;
      }
    }
  }
`;

export default SelectionTableWrapper;
