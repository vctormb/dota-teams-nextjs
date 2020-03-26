import styled from "styled-components";

const borderColor = "rgba(255, 255, 255, 0.05)";

const Table = styled.table`
  width: 100%;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[0]}px;
  border-collapse: collapse;

  thead {
    text-transform: uppercase;
    border-bottom: 1px solid ${borderColor};
  }

  th {
    height: 38px;
    font-weight: 500;
    text-align: initial;
    padding-left: 8px;
    padding-right: 8px;

    &:first-child {
      padding-left: 24px;
    }
  }

  tr {
    &:last-child {
      td {
        border-bottom: 1px solid transparent;
      }
    }
  }

  td {
    border-bottom: 1px solid ${borderColor};
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: ${p => p.theme.colors.whiteopaque};

    &:first-child {
      padding-left: 24px;
    }
  }

  a {
    color: ${p => p.theme.colors.lightblue};
    font-weight: 500;
  }
`;

export default Table;
