const styles = {
  section: {
    py: "3rem",
    px: "1.5rem",
    textAlign: "center",
  },
  grayBackground: {
    backgroundColor: "#f4f4f6",
  },
  whiteBackground: {
    backgroundColor: "#ffffff",
  },
  sectionTitle: {
    marginBottom: "2rem",
    fontWeight: 600,
    color: "#2e2e2e",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    justifyContent: "center",
    marginBottom: "1.25rem",
  },
  sectionText: {
    maxWidth: "43.75rem",
    margin: "auto",
    lineHeight: "1.7",
    fontSize: "1.1rem",
    color: "#4d4d4d",
  },
  imageBox: {
    my: "3rem",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "50rem",
    height: "auto",
    borderRadius: "1.75rem",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "2rem",
    mt: "2rem",
  },
  card: {
    backgroundColor: "#f9fafb",
    borderRadius: "1.5rem",
    padding: "2rem",
    maxWidth: "22rem",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid #d3dcd6",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
    },
  },
  ctaBox: {
    py: "4rem",
    textAlign: "center",
    backgroundColor: "#eef1f4",
  },
  button: {
    mt: "1.5rem",
    fontSize: "1rem",
    padding: "0.75rem 2.25rem",
    borderRadius: "2rem",
    backgroundColor: "#d1dfd7",
    color: "#1a1a1a",
    fontWeight: 500,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#bcd2c4",
    },
  },
};

export default styles;
