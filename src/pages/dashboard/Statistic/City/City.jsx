import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { countPercent, parseNumber } from 'util/number';

import { districtData } from '../../../../mockups/table';
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
    setData(districtData);
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
                <th data-priority="3">Đã duyệt</th>
                <th data-priority="3">Đã giao</th>
                <th data-priority="3">% Đã giao</th>
                <th data-priority="3">Đã hủy</th>
                <th data-priority="3">% Đã hủy</th>
              </tr>
            </thead>
            <Tbody>
              {data.map((d, index) => (
                <Row key={d.name}>
                  <td>{d.name}</td>
                  <td>{parseNumber(d.totalApprove)}</td>
                  <td>{parseNumber(d.totalReceive)}</td>
                  <td>{countPercent(d.totalReceive, d.totalApprove)}</td>
                  <td>{parseNumber(d.totalReject)}</td>
                  <td>{countPercent(d.totalReject, d.totalApprove)}</td>
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
