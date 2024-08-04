import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/RouteConfig';

export const AppRouter = () => (
  <Suspense fallback={<div>loading</div>}>
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => (

        <Route
          key={path}
          path={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
            )}
        />

      ))}
    </Routes>
  </Suspense>
);
