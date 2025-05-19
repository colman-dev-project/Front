import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledPurchaseButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.background.default} 0%, ${theme.palette.text.secondary} 100%)`,
  color: theme.palette.text.primary,
  fontWeight: "bold",
  borderRadius: 12,
  padding: theme.spacing(1.5, 0),
  fontSize: "1rem",
  letterSpacing: 1,
  boxShadow: theme.shadows[2],
  transition: "background 0.3s",

}));
