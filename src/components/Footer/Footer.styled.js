import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled(Box)({
  backgroundColor: "#f5f5f5",
  borderTop: "1px solid #ddd",
  padding: "1.5rem 2rem",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#555",
  marginTop: "auto",
});

export const FooterLinks = styled(Box)({
  marginTop: "0.5rem",
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
});
