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
    TotalPerson: 0,
    TotalSigned: 0,
  });

  useEffect(() => {
    const TotalPerson = data.reduce(
      (sum, { TotalPerson }) => sum + TotalPerson,
      0
    );

    const TotalNotSigned = data.reduce(
      (sum, { TotalNotSigned }) => sum + TotalNotSigned,
      0
    );

    const TotalSigned = data.reduce(
      (sum, { TotalSigned }) => sum + TotalSigned,
      0
    );

    const totalReject = data.reduce(
      (sum, { TotalWrongNameId, TotalWrongGender, TotalWrongDOB }) =>
        sum + TotalWrongNameId + TotalWrongGender + TotalWrongDOB,
      0
    );

    setState({
      TotalPerson,
      TotalSigned,
      TotalNotSigned,
      totalReject,
    });
  }, [data]);

  return (
    <Root>
      <Item>
        <Title>Tổng số</Title>
        <Value>{parseNumber(state.TotalPerson)}</Value>
      </Item>
      <Item>
        <Title>Đã ký nhận</Title>
        <Value>{parseNumber(state.TotalSigned)}</Value>
      </Item>
      <Item>
        <Title>Chưa ký nhận</Title>
        <Value>{parseNumber(state.TotalNotSigned)}</Value>
      </Item>
      <Item>
        <Title>% Thành công</Title>
        <Value>{countPercent(state.TotalSigned, state.TotalPerson)}</Value>
      </Item>
      <Item>
        <Title>Đã hủy</Title>
        <Value>{parseNumber(state.totalReject)}</Value>
      </Item>
      <Item>
        <Title>% Hủy</Title>
        <Value>{countPercent(state.totalReject, state.TotalPerson)}</Value>
      </Item>
    </Root>
  );
};

export { CityTotal };
