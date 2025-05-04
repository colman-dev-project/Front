import * as React from 'react';
import {
  StyledBox,
  StyledGrid,
  StyledItem
} from './Grid.styles';

function SharedGrid({
  items = [],
  columns = defaultColumns,
  spacing = defaultSpacing,
  itemSize = defaultItemSize,
  style = defaultStyle,
  ...rest
}) {
  return (
    <StyledBox style={style}>
      <StyledGrid
        container
        spacing={spacing}
        columns={columns}
        {...rest}
      >
        {items.map((item) => (
          <StyledGrid item key={item.id} {...itemSize}>
            <StyledItem>{item.description}</StyledItem>
          </StyledGrid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
}

export default SharedGrid;
