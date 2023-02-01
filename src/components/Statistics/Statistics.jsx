
import PropTypes from 'prop-types';
import { StatisticsCard, StatisticsTitle, StatList, StatisticItem } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

           <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticItem key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </StatisticItem>
          );
        })}
      </StatList>        
        </StatisticsCard>
    )
}



Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

