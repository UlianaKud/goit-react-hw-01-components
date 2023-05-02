import css from './friendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <li className={css.item}>
      {status?(<span className={css.status}>{status}</span>):
      (<span className={css.statusRed}>{status}</span>)}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
