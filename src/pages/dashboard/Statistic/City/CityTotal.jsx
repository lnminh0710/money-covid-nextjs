import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { countPercent, parseNumber } from 'util/number';

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  background-color: #bdbdbd;
`;

const Item = styled.div`
  width: max(200px, calc(100% / 6));
  height: 100px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px;
`;

const Title = styled.div`
  heigh: 40px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

const Value = styled.div`
  text-align: center;
  font-size: 30px;
  color: #5c609c;
  font-weight: 600;
`;

const CityTotal = ({ data }) => {
  const [state, setState] = useState({
    totalReject: 0,
    totalApprove: 0,
    totalReceive: 0,
  });
  console.log(
    'Author:minh.lam , file: CityTotal.jsx , line 37 , CityTotal , state',
    state
  );

  useEffect(() => {
    const totalApprove = data.reduce(
      (sum, { totalApprove }) => sum + totalApprove,
      0
    );
    const totalReceive = data.reduce(
      (sum, { totalReceive }) => sum + totalReceive,
      0
    );
    const totalReject = data.reduce(
      (sum, { totalReject }) => sum + totalReject,
      0
    );
    setState({
      totalApprove,
      totalReceive,
      totalReject,
    });
  }, [data]);

  return (
    <Root>
      <Item>
        <Title>Đã duyệt</Title>
        <Value>{parseNumber(state.totalApprove)}</Value>
      </Item>
      <Item>
        <Title>Chờ giao</Title>
        <Value>{parseNumber(state.totalApprove - state.totalReceive)}</Value>
      </Item>
      <Item>
        <Title>Đã giao</Title>
        <Value>{parseNumber(state.totalReceive)}</Value>
      </Item>
      <Item>
        <Title>% Thành công</Title>
        <Value>{countPercent(state.totalReceive, state.totalApprove)}</Value>
      </Item>
      <Item>
        <Title>Đã hủy</Title>
        <Value>{parseNumber(state.totalReject)}</Value>
      </Item>
      <Item>
        <Title>% Hủy</Title>
        <Value>{countPercent(state.totalReject, state.totalApprove)}</Value>
      </Item>
    </Root>
  );
};

export { CityTotal };
