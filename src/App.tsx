import { Dashboard } from './pages/Dashboard/Dashboard.tsx';
import './App.css';
import { Suspense } from 'react';

function LoadingSpinner() {
    return (
        <div className="app-loading">
            <div className="app-loading-spinner" />
            <p className="app-loading-text">Загрузка...</p>
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
