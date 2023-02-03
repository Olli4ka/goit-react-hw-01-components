import PropTypes from 'prop-types';
import { TransactionTable, TransactionTableHeader, TransactionTableRow } from './TransactionHistory.styled';


export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <TransactionTableHeader>Type</TransactionTableHeader>
                    <TransactionTableHeader>Amount</TransactionTableHeader>
                    <TransactionTableHeader>Currency</TransactionTableHeader>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ type, amount, currency, id }) => (
                    <tr key={id}>
                        <TransactionTableRow>{type}</TransactionTableRow>
                        <TransactionTableRow>{amount}</TransactionTableRow>
                        <TransactionTableRow>{currency}</TransactionTableRow>
                    </tr>
                ))}
            </tbody>
        </TransactionTable>
    );
};



TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};