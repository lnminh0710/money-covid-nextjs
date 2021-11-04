import styled from 'styled-components';
import { ChartPerDate } from './Chart/ChartPerDate';
import { Statistic } from './Statistic/Statistic';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Space = styled.div`
  height: 40px;
`;

const Dashboard = () => {
  return (
    <Root>
      <Space />
      <Statistic />
      <Space />
      <ChartPerDate />
      <Space />
    </Root>
  );
};

export { Dashboard };
