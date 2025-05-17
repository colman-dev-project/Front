import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledPurchaseButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #F5F5F5 0%, #BDBDBD 100%)",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: 12,
  padding: theme.spacing(1.5, 0),
  fontSize: "1rem",
  letterSpacing: 1,
  boxShadow: theme.shadows[2],
  transition: "background 0.3s",

}));
