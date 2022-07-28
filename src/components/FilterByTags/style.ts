import styled from "@emotion/styled";
import { COLOR } from "../variables";

const FilterByTagsWrapper = styled.section`
  max-width: 1000px;
  margin: 24px auto 0 auto;

  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &__each {
      margin: 5px;

      &--clear-btn {
        color: ${COLOR.grey};
        font-size: 0.9rem;
        font-weight: 300;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        margin: 5px 5px 5px 10px;

        &:hover {
          color: ${COLOR.black};
        }
      }
    }
  }
`;

export default FilterByTagsWrapper;
