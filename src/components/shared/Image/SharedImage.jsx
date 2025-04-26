import React from 'react';
import StyledImg from './Image.styles';

const SharedImage = ({ src, alt, style={} }) => {
  return <StyledImg src={src} alt={alt} sx={style} />;
};

export default SharedImage;
