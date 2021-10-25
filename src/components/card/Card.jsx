import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0 4px 12px 0 rgb(34 41 47 / 12%);
  border: 1px solid rgba(38, 56, 150, 0.1411764705882353);
  border-radius: 10px;
  padding: 24px;
  display: block;
  background-color: #fff;
  width: ${({ width }) => (width ? width : '95%')};
`;

const Card = ({ children, width }) => {
  return <Wrapper width={width}>{children}</Wrapper>;
};

export { Card };
