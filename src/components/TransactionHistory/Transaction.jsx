import PropTypes from 'prop-types';
import { TransactionTRow, TransactionTCell } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <TransactionTRow>
      <TransactionTCell>{type}</TransactionTCell>
      <TransactionTCell>{amount}</TransactionTCell>
      <TransactionTCell>{currency}</TransactionTCell>
    </TransactionTRow>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
