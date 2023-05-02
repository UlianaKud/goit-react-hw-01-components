import css from './statistics.module.css';
import PropTypes from 'prop-types';

export const StatisticsTitle = ({ text }) => {
  return text && <h2 className={css.title}>{text}</h2>;
};

StatisticsTitle.propTypes = {
  text: PropTypes.string,
};
