import { Suspense, lazy } from 'react';
import './App.css';

const Dashboard = lazy(() =>
  new Promise<{ default: React.ComponentType }>((resolve) => {
    setTimeout(() => {
      import('./pages/Dashboard/Dashboard').then((module) => {
        resolve({ default: module.Dashboard });
      });
    }, 1000);
  })
);

function LoadingSpinner() {
  return (
    <div className="app-loading">
      <div className="app-loading-spinner" />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
