import PropTypes from 'prop-types';
import {
  StatisticCard,
  Title,
  StatList,
  StatItem,
  StatWrap,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatWrap>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatWrap>
          </StatItem>
        ))}
      </StatList>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
