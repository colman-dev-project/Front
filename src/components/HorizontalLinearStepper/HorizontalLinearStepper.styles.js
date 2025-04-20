import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme/theme.js";

export const StepperContainer = styled(Box)({
  width: "100%",
});

export const StepContentBox = styled(Box)({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  paddingTop: theme.spacing(2),
});

export const Spacer = styled(Box)({
  flex: "1 1 auto",
});

export const BackButton = styled(Button)({
  marginRight: theme.spacing(1),
});

export const CompleteText = styled(Typography)({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
});
