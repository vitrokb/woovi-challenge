import { Card, CardContent, Typography, Chip } from '@mui/material';

function PaymentsOptionsCards(chipLabel: string) {
  return (
    <>
      <div style={{ position: 'relative', top: 0, right: 0, marginBottom: 5 }}>
        <Chip
          label="Pix"
          color="default"
          variant="filled"
          size="small"
          sx={{
            content: `"${chipLabel}"`,
            position: 'absolute',
            top: '-6px',
            left: '16px',
            backgroundColor: '#E5E5E5',
            padding: '0 8px',
            fontWeight: 700,
          }}
        />
      </div>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            1x R$ 30.500,00
          </Typography>
          <Typography variant="body2" color="primary.contrastText">
            Ganhe 3% de Cashback
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default PaymentsOptionsCards;
