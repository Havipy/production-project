import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader';
import { Sidebar } from 'widgets/Sidebar/ui';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
