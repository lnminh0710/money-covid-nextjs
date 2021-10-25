import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { Card } from '../../../components/card/Card';

import { districtData } from '../../../mockups/table';

const Title = styled.h5`
  margin-bottom: 20px;
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

const TableStatistic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(districtData);
  }, []);

  return (
    <Card>
      <Title>Số liệu nhận hổ trợ theo địa phương</Title>
      <WrapperTable>
        <Table id="tech-companies-1" bordered borderless striped responsive>
          <thead>
            <tr>
              <th data-priority="1">STT</th>
              <th data-priority="3">Tỉnh/Thành phố</th>
              <th data-priority="3">Dân số</th>
              <th data-priority="3">Số người đã nhận</th>
            </tr>
          </thead>
          <Tbody>
            {data.map((d, index) => (
              <Row key={d.name}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.districtCode}</td>
                <td>{d.provinceCode}</td>
              </Row>
            ))}
          </Tbody>
        </Table>
      </WrapperTable>
    </Card>
  );
};

export { TableStatistic };
