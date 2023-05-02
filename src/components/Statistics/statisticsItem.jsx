import css from './statistics.module.css';
import PropTypes from 'prop-types';
import {GetRandomHexColor} from '../../utils/randomColor';


export const StatisticsItem = ({label, percentage}) => {
  return (
        <li className={css.item} style={{backgroundColor:  GetRandomHexColor() }}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
  );
};
StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}