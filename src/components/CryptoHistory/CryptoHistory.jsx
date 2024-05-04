import { format } from 'date-fns';
import style from './CryptoHistory.module.css'

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction, index) => (
          <tr className={style.tr} key={transaction.id}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{transaction.price}</td>
            <td className={style.td}>{transaction.amount}</td>
            <td className={style.td}>
              {format(new Date(transaction.date), 'MM/dd/yyyy, p')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


