import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Container, Header, Link } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
