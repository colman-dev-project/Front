import * as React from 'react';
import { StyledBox, StyledGrid, StyledItem } from './Grid.styles';

function SharedGrid({
  items = [],
  columns = { xs: 4, sm: 8, md: 12 },
  spacing = { xs: 2, md: 3 },
  itemSize = { xs: 2, sm: 4, md: 4 },
  style = {},
  ...rest
}) {
  return (
    <StyledBox sx={{ flexGrow: 1 }} style={style}>
      <StyledGrid
        container
        spacing={spacing}
        columns={columns}
        {...rest}
      >
        {items.map((item, index) => (
          <StyledGrid item key={index} {...itemSize}>
            <StyledItem>{item}</StyledItem>
          </StyledGrid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
}

export default SharedGrid;
