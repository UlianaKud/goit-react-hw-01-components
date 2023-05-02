import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { StatisticsItem } from './statisticsItem';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem key={id} label={label} percentage={percentage} />
          );
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
  title: PropTypes.string,
};
