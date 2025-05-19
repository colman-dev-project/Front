import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.divider,
}));
