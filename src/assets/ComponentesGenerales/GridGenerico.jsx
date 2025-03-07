import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || ""};
  grid-template-rows: ${({ rows }) => rows || ""};
  gap: ${({ gap }) => gap || "10px"};
  width: 100%;
  height: 100%;
`;

export const GridItem = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || "auto"};
  grid-row: ${({ gridRow }) => gridRow || "auto"};
`;

export const GridGenerico = ({ columns, rows, gap, children }) => {
  return (
    <GridContainer columns={columns} rows={rows} gap={gap}>
      {children}
    </GridContainer>
  );
};

