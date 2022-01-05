import { ReactChild } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactChild;
}

const Main = styled.main`
  width: 100%;
  padding: 15px 0 15px 15px;
  margin-left: 50px;
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
  display: flex;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 500;
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
