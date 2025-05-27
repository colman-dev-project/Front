import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { motion } from 'framer-motion';

import useScrollToTop from '../hooks/useScrollToTop';
import styles from './About.styled';

// קומפוננטות משותפות
import SharedTypography from '../components/shared/Text/SharedText';
import SharedButton from '../components/shared/Button/SharedButton';
import SharedGrid from '../components/shared/Grid/SharedGrid';
import { SharedImage } from '../components/shared/Image/SharedImage';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function About() {
  useScrollToTop();

  return (
    <Box maxWidth="lg" sx={{ mx: 'auto' }}>

      {/* כותרת ראשית */}
      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ ...styles.section, ...styles.grayBackground }}>
        <SharedTypography variant="h4" style={styles.sectionTitle}>
          Nice to meet you! 👋
        </SharedTypography>

        <Box sx={styles.iconText}>
          <InfoIcon />
          <SharedTypography variant="h6">Who Are We?</SharedTypography>
        </Box>

        <SharedTypography variant="body1" style={{ maxWidth: '700px', margin: 'auto' }}>
          We are here to create a modern and secure shopping experience where you choose, pay, and collect anytime.
        </SharedTypography>
      </Box>

      {/* תמונה */}
      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={styles.imageBox}>
        <SharedImage src="/team-photo.jpg" alt="Team" style={styles.image} />
      </Box>

      {/* למה לבחור בנו */}
      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ ...styles.section, ...styles.grayBackground }}>
        <SharedTypography variant="h5" style={styles.sectionTitle}>
          Why Choose Us?
        </SharedTypography>

        <SharedGrid style={styles.gridContainer}>
          <Box sx={styles.card}>
            <SharedTypography variant="h6" style={{ color: '#3f51b5' }}>
              <LocationOnIcon /> Self Pickup Lockers
            </SharedTypography>
            <SharedTypography variant="body2">
              Collect anytime – no delivery fees.
            </SharedTypography>
          </Box>

          <Box sx={styles.card}>
            <SharedTypography variant="h6" style={{ color: '#3f51b5' }}>
              <WatchLaterIcon /> 24/7 Availability
            </SharedTypography>
            <SharedTypography variant="body2">
              Our lockers are always open for you.
            </SharedTypography>
          </Box>

          <Box sx={styles.card}>
            <SharedTypography variant="h6" style={{ color: '#3f51b5' }}>
              <SecurityIcon /> User Privacy
            </SharedTypography>
            <SharedTypography variant="body2">
              Your data is protected with the latest technologies.
            </SharedTypography>
          </Box>
        </SharedGrid>
      </Box>

      {/* מיקומי לוקרים */}
      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={{ ...styles.section, ...styles.whiteBackground }}>
        <SharedTypography variant="h5" style={styles.sectionTitle}>
          Our Locker Locations 📍
        </SharedTypography>

        <List sx={{ maxWidth: 400, mx: 'auto' }}>
          <ListItem>• Tel Aviv – Azrieli</ListItem>
          <ListItem>• Jerusalem – Malha</ListItem>
          <ListItem>• Haifa – Grand Canyon</ListItem>
          <ListItem>• More locations across the country...</ListItem>
        </List>
      </Box>

      {/* קריאה לפעולה */}
      <Box component={motion.div} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} sx={styles.ctaBox}>
        <SharedTypography variant="h6">
          Want to explore our locker network?
        </SharedTypography>

        <SharedButton label="View All Locations" style={styles.button} />
      </Box>

    </Box>
  );
}

export default About;
