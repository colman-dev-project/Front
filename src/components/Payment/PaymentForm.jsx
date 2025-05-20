import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ cardNumber, expiry, cvv, cardHolder });
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Payment Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiry (MM/YY)"
              variant="outlined"
              fullWidth
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Cardholder Name"
              variant="outlined"
              fullWidth
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default PaymentForm;
