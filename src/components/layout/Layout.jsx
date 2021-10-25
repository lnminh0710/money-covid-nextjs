import LayoutHead from './LayoutHead';
import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutHead />
      <Header />
      {children}
    </>
  );
};

export { Layout };
