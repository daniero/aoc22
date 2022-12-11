import React from 'react';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';

const days = new Array(25).fill(null).map((_, index) => {
  const number = String(index + 1).padStart(2, '0');

  const url = new URL(`./solutions/Day${number}.tsx`, import.meta.url);
  const module =
    url.pathname === '/undefined'
      ? null
      : React.lazy(async () => await import(`./solutions/Day${number}.tsx`));

  return {
    number,
    module,
  };
});

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        {days.map(({ number, module: Module }) => (
          <Route
            key={number}
            path={number}
            element={
              Module != null ? (
                <React.Suspense fallback={<div>Loading ...</div>}>
                  <Module />
                </React.Suspense>
              ) : (
                <NotImplemented day={number} />
              )
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout(): JSX.Element {
  return (
    <>
      <header>
        <Link to="/">AoC-22</Link>
      </header>
      <nav>
        <ul>
          {days.map((day, i) => (
            <li key={day.number}>
              {day.module != null ? (
                <NavLink to={day.number}>{day.number}</NavLink>
              ) : (
                <span>{day.number}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function StartPage(): JSX.Element {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Here are my solutions to{' '}
        <a href="https://adventofcode.com/2022">Advent of Code 2022</a>!
      </p>
    </>
  );
}

function NotImplemented({ day }: { day: String }): JSX.Element {
  return (
    <>
      <h1>Not implemented</h1>
      <div>Day {day} has not been implemented yet</div>
    </>
  );
}

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>The page you&apos;re looking for isn&apos;t here :(</p>
    </>
  );
}

export default App;
