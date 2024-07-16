import { Grid, Typography } from '@mui/material';
import { WooviLogo } from '../../components/WooviLogo';
import { PaymentsOptionsCards } from '../../components/PaymentsOptionsCards';
import { BoldSpan } from '../../components/BoldSpan';

function PaymentMethods() {
  return (
    <Grid container spacing={3} direction="column" alignItems="center" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <WooviLogo />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" fontWeight={700}>
          João, como você quer pagar?
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <PaymentsOptionsCards
          chipLabel="Pix"
          cashback
          tip={<>🤑{<BoldSpan> R$ 300 </BoldSpan>}de volta no seu Pix na hora</>}
        />
      </Grid>
    </Grid>
  );
}

export default PaymentMethods;
