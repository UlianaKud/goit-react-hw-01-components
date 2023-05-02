import user from '../incoming-data/user.json';
import data from '../incoming-data/data.json';
import friends from '../incoming-data/friends.json';
import transactions from '../incoming-data/transactions.json';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
