import { Card, CardContent, Typography, Chip } from '@mui/material';
import { PaymentsOptionsCardTip } from '../PaymentsOptionsCardTip';
import { BoldSpan } from '../BoldSpan';

interface PaymentsOptionsCardsType {
  chipLabel: string;
  cashback?: boolean;
  tip?: React.ReactNode;
}

function PaymentsOptionsCards({ chipLabel, cashback, tip }: PaymentsOptionsCardsType) {
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
          <Typography variant="body1" component="div">
            <BoldSpan>1x</BoldSpan> R$ 30.500,00
          </Typography>

          {cashback ? (
            <Typography variant="body2" color="primary.contrastText">
              Ganhe 3% de Cashback
            </Typography>
          ) : null}

          {tip ? <PaymentsOptionsCardTip>{tip}</PaymentsOptionsCardTip> : null}
        </CardContent>
      </Card>
    </>
  );
}

export default PaymentsOptionsCards;
