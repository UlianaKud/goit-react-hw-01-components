import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';
import { TransactionHistoryItem } from './transactionHistoryItem';

export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <thbody className={css.data}>
      {items.map(({ id, type, amount, currency }) => {
          return <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />;
        })}
      </thbody>
    </table>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };