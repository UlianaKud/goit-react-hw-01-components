import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { StatisticsItem } from './statisticsItem';
import data from '../../incoming-data/data.json';
import { StatisticsTitle } from './statisticsTitle';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle text='Upload stats'/>
      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
          return <StatisticsItem key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
