import { Card } from 'components/card/Card';
import { useState } from 'react';
import styled from 'styled-components';
import { CityStatistic } from './City/City';

const TabContent = styled.div`
  padding: 15px;
`;

const Statistic = () => {
  const [tabActive, setTabActive] = useState('city');
  return (
    <Card>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            onClick={() => setTabActive('city')}
            className={`nav-link ${tabActive === 'city' ? 'active' : ''}`}
          >
            Thành phố
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${tabActive === 'district' ? 'active' : ''}`}
            onClick={() => setTabActive('district')}
          >
            Quận
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <TabContent
          className={`tab-pane fade ${
            tabActive === 'city' ? 'show active' : ''
          }`}
          role="tabpanel"
        >
          <CityStatistic />
        </TabContent>
        <TabContent
          className={`tab-pane fade ${
            tabActive === 'district' ? 'show active' : ''
          }`}
          role="tabpanel"
        >
          <CityStatistic />
        </TabContent>
      </div>
    </Card>
  );
};

export { Statistic };
