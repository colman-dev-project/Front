import React from 'react';
import { Grid, Divider, Box } from '@mui/material';
import { SharedImage } from '../shared/Image/SharedImage';
import SharedTypography from '../shared/Text/SharedText';
import {
  OrderCardContainer,
  ItemCard,
  ImageStyle,
  SharedFlexBox,
  dividerStyle,
} from './OrderCard.styled';
import SharedGrid from '../shared/Grid/SharedGrid';
import { UI_TEXT } from '../../constants/text';
import { convertToShekels } from '../../utils/converting';

const OrderCard = ({ items = [], total = 0 }) => {
  return (
    <OrderCardContainer>
      {items.length === 0 ? (
        <SharedTypography variant="body1">
          {UI_TEXT.NO_ITEMS_IN_CART}
        </SharedTypography>
      ) : (
        <>
          <SharedGrid container direction="column">
            {items.map((item, index) => (
              <Grid item key={index}>
                <ItemCard>
                  <SharedFlexBox>
                    <SharedImage
                      src={item.image}
                      alt={item.name}
                      style={ImageStyle}
                    />
                  </SharedFlexBox>
                  <SharedTypography variant="body1">
                    {item.name}
                  </SharedTypography>
                  <SharedTypography variant="body2" fontWeight="medium">
                    {convertToShekels(item.price)}
                  </SharedTypography>
                </ItemCard>
              </Grid>
            ))}
          </SharedGrid>

          <Divider sx={dividerStyle} />

          <SharedGrid
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <SharedTypography variant="h6" fontWeight="bold">
              {UI_TEXT.CART_TOTAL}
            </SharedTypography>
            <SharedTypography variant="h6" fontWeight="bold">
              {convertToShekels(total.toFixed(2))}
            </SharedTypography>
          </SharedGrid>
        </>
      )}
    </OrderCardContainer>
  );
};

export default OrderCard;
