import { ReactChild } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactChild;
}

const Main = styled.main`
  width: 100%;
  padding: 15px 0;
  margin-left: 65px;
`;

const Sidebar = styled.nav`
  width: 50px;
  background-color: white;
  height: 100vh;
  padding: 20px 5px;
  position: fixed;
  left: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Sidebar>
        <Link href='/'>
          <a>
            <img src='/lean-tech-logo.png' alt='lean tech logo' />
          </a>
        </Link>
      </Sidebar>
      <Main>
        { children }
      </Main>
    </Container>
  );
}
