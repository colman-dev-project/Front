import React from 'react';
import { StyledIconButton } from '../icon.styles';
import SharedButton from './SharedButton';

function SharedIcon({ icon, onClick, style = {}, withLabel, label, ...rest }) {
  return (
    <>
      {withLabel ? (
        <SharedButton
          label={
            <>
              {icon}
              {label && <span style={{ marginLeft: 8 }}>{label}</span>}
            </>
          }
          onClick={onClick}
          style={style}
          {...rest}
        />
      ) : (
        <StyledIconButton onClick={onClick} sx={style} {...rest}>
          {icon}
        </StyledIconButton>
      )}
    </>
  );
}

export default SharedIcon;
