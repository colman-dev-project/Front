import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  border: '1px solid black',           
  backgroundColor: '#f9f9f9',          
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  color: 'black',                      
  textTransform: 'none',                 
  '&:hover': {
    backgroundColor: '#e0e0e0',         
    borderColor: 'black',              
  },
}));

export const IconWrapper = styled('span')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',
});
