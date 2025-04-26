import React from 'react';
import SharedImage from './SharedImage';
import item1 from '../../../assets/item1.jpg';
import { Box } from '@mui/material';
import SharedTypography from '../Text/SharedText';

const TestImgComponent = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <SharedTypography variant="h6">Test Image Component</SharedTypography>
      <SharedImage
        src={item1}
        alt="Test Image"
        style={{
          height: '18.75rem',
          margin: '1.25rem',
        }}
      />
    </Box>
  );
};

export default TestImgComponent;
