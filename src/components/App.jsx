import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#3f51b5',
      }}
    >
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '30px',
          fontSize: '26px',
          justifyContent: 'center',
          paddingLeft: '0px',
          paddingTop: '30px',
          paddingBottom: '30px',
          margin: '0px',
        }}
      >
        <li>
          <Link to="/" style={{ color: 'white' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" style={{ color: 'white' }}>
            Movies
          </Link>
        </li>
      </ul>
      <Routes>
        <Route />
        <Route />
      </Routes>
    </div>
  );
};
