const styles = {
  section: {
    py: 12,
    px: 3,
    textAlign: 'center',
  },
  grayBackground: {
    backgroundColor: '#f7f9fc',
  },
  whiteBackground: {
    backgroundColor: '#ffffff',
  },
  sectionTitle: {
    fontWeight: 700,
    mb: 4,
    fontSize: { xs: '2.2rem', md: '2.8rem' },
    color: '#212121',
  },
  iconText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    mb: 3,
    color: '#1976d2',
  },
  imageBox: {
    textAlign: 'center',
    my: 8,
    bgcolor: '#ffffff',
    py: 6,
    px: 2,
    borderRadius: '24px',
    boxShadow: '0 12px 32px rgba(0,0,0,0.05)',
    transition: 'transform 0.4s ease',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  image: {
    borderRadius: '20px',
    width: '100%',
    maxWidth: '700px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
  },
  gridContainer: {
    mt: 5,
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
    minWidth: '260px',
    maxWidth: '300px',
    flex: '1 1 260px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 32px rgba(0,0,0,0.15)',
    },
  },
  ctaBox: {
    textAlign: 'center',
    mt: 10,
    py: 8,
    px: 4,
    bgcolor: '#e3f2fd',
    borderRadius: '20px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.07)',
  },
  button: {
    mt: 3,
    px: 6,
    py: 1.8,
    fontWeight: 'bold',
    borderRadius: '50px',
    fontSize: '1.1rem',
  },
};

export default styles;
