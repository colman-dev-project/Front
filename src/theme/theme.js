import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    divider: "#ddd",
    text: {
      primary: "#555555",
      secondary: "#888888",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#1565c0",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontSize: 14,
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
