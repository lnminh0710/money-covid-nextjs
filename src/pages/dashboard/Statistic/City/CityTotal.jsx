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
  width: max(200px, calc(100% / 7));
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
    TotalPerson: 0,
    TotalSigned: 0,
    TotalNotSigned: 0,
    TotalWrongNameId: 0,
    TotalWrongGender: 0,
    TotalWrongDOB: 0,
    TotalWrongPhone: 0,
  });

  useEffect(() => {
    setState({
      TotalPerson: data.reduce((sum, { TotalPerson }) => sum + TotalPerson, 0),
      TotalSigned: data.reduce((sum, { TotalSigned }) => sum + TotalSigned, 0),
      TotalNotSigned: data.reduce(
        (sum, { TotalNotSigned }) => sum + TotalNotSigned,
        0
      ),
      TotalWrongNameId: data.reduce(
        (sum, { TotalWrongNameId }) => sum + TotalWrongNameId,
        0
      ),
      TotalWrongGender: data.reduce(
        (sum, { TotalWrongGender }) => sum + TotalWrongGender,
        0
      ),
      TotalWrongDOB: data.reduce(
        (sum, { TotalWrongDOB }) => sum + TotalWrongDOB,
        0
      ),
      TotalWrongPhone: data.reduce(
        (sum, { TotalWrongPhone = 0 }) => sum + TotalWrongPhone,
        0
      ),
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
        <Title>Sai lệch họ tên</Title>
        <Value>{parseNumber(state.TotalWrongNameId)}</Value>
      </Item>
      <Item>
        <Title>Sai lệch giới tính</Title>
        <Value>{parseNumber(state.TotalWrongGender)}</Value>
      </Item>
      <Item>
        <Title>Sai lệch ngày sinh</Title>
        <Value>{parseNumber(state.TotalWrongDOB)}</Value>
      </Item>
      <Item>
        <Title>Sai lệch số điện thoại</Title>
        <Value>{parseNumber(state.TotalWrongPhone)}</Value>
      </Item>
    </Root>
  );
};

export { CityTotal };
