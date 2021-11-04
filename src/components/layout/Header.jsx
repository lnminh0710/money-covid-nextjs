import styled from 'styled-components';

const Root = styled.div`
  height: 80px;
  width: 100%;
  background: linear-gradient(133deg, #fea816, #5c609c, #424161) !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 160px;
  height: 60.75px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 20pt;
  font-weight: 700;
  margin-left: 10px;
`;

const Header = () => {
  return (
    <Root>
      <Content>
        <Img src="logo.png" alt="image" />
        <Title>CỔNG THÔNG TIN HỔ TRỢ ĐỢT 3</Title>
      </Content>
    </Root>
  );
};

export { Header };
