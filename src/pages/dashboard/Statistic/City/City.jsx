import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { parseNumber } from 'util/number';

import { CityChart } from './CityChart';
import { CityTotal } from './CityTotal';

const Title = styled.h5`
  margin-bottom: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #5c609c;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  padding-left: 12px;
`;

const SplitView = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;

const WrapperTable = styled.div`
  border: none !important;
`;

const Tbody = styled.tbody`
  height: 500px;
  overflow: auto;
`;

const Row = styled.tr`
  cursor: pointer;
`;

const CityStatistic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const callAPI = async () => {
      fetch('http://210.2.93.91:3000/v1/data/1/districts')
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        });
    };
    callAPI();
  }, []);

  return (
    <>
      <Title>Tổng quan chính sách hỗ trợ đợt 3</Title>
      <CityTotal data={data} />
      <SplitView>
        <CityChart data={data} />
        <WrapperTable>
          <Table id="tech-companies-1" bordered borderless striped responsive>
            <thead>
              <tr>
                <th data-priority="3"></th>
                <th data-priority="3">Tổng số đối tượng</th>
                <th data-priority="3">Đã ký nhận</th>
                <th data-priority="3">Chưa ký nhận</th>
                <th data-priority="3">Sai lệch họ tên</th>
                <th data-priority="3">Sai lệch giới tính</th>
                <th data-priority="3">Sai lệch ngày sinh</th>
              </tr>
            </thead>
            <Tbody>
              {data.map((d, index) => (
                <Row key={d.DistrictName}>
                  <td>{d.DistrictName}</td>
                  <td>{parseNumber(d.TotalPerson)}</td>
                  <td>{parseNumber(d.TotalSigned)}</td>
                  <td>{parseNumber(d.TotalNotSigned)}</td>
                  <td>{parseNumber(d.TotalWrongNameId)}</td>
                  <td>{parseNumber(d.TotalWrongGender)}</td>
                  <td>{parseNumber(d.TotalWrongDOB)}</td>
                </Row>
              ))}
            </Tbody>
          </Table>
        </WrapperTable>
      </SplitView>
    </>
  );
};

export { CityStatistic };
