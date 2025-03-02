import { CardItem } from '../types/CardTypes';

const cards: CardItem[] = [
  {
    title: 'Transfer miles',
    image: require('../assets/transfer_miles.png'),
    body: '25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio',
    subtitle: 'Best for Business & First Class',
  },
  {
    title: 'Fly and Claim',
    image: require('../assets/fly_and_claim.png'),
    body: 'Upload your flight ticket, and get reimbursed within 5 days',
    subtitle: 'Best for Economy',
  },
  {
    title: 'Not flying soon',
    image: require('../assets/not_flying_soon.png'),
    body: 'You can always redeem Gift Cards with your Max Miles',
    subtitle: 'Best for Starters',
  },
];

export { cards };
