import {
  ElTotalOption,
  StatisticsList,
  ValueOption,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      {total === 0 && <Notification message="There is no feedback" />}

      {total !== 0 && (
        <>
          <ElTotalOption>
            Good:
            <ValueOption>{good}</ValueOption>
          </ElTotalOption>
          <ElTotalOption>
            Neutral:
            <ValueOption>{neutral}</ValueOption>
          </ElTotalOption>
          <ElTotalOption>
            Bad:
            <ValueOption>{bad}</ValueOption>
          </ElTotalOption>
          <ElTotalOption>
            Total:
            <ValueOption>{total}</ValueOption>
          </ElTotalOption>
          <ElTotalOption>
            Positive feedback:
            <ValueOption>{positivePercentage}</ValueOption>
          </ElTotalOption>
        </>
      )}
    </StatisticsList>
  );
};
