import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
  <Routes>
    {Object.values(routerConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>

            )}
      />
    ))}
  </Routes>
);
