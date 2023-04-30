import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import {
  TransactionTable,
  TransactionTHead,
  TransactionTCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTHead>
        <tr>
          <TransactionTCell>Type</TransactionTCell>
          <TransactionTCell>Amount</TransactionTCell>
          <TransactionTCell>Currency</TransactionTCell>
        </tr>
      </TransactionTHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
