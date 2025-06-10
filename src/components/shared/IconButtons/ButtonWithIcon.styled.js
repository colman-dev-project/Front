// components/Shared/IconButtons/ButtonWithIcon.styled.js
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// יצירת כפתור מותאם אישית ב-MUI
export const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  border: '1px solid black',            // גבול שחור
  backgroundColor: '#f9f9f9',           // רקע בהיר
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  color: 'black',                       // טקסט שחור
  textTransform: 'none',                 // ביטול שינוי אוטומטי של הטקסט לאותיות רישיות
  '&:hover': {
    backgroundColor: '#e0e0e0',         // רקע בעת ריחוף
    borderColor: 'black',               // גבול שחור בעת ריחוף
  },
}));

export const IconWrapper = styled('span')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.2rem',
});
