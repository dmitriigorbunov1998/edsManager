import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { useHeader } from '../../hooks/useHeader';
import { Zap } from 'lucide-react';
import type { ComponentProps } from 'react';
import './Dashboard.css';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const headerProps = useHeader();

  const headerComponentProps: ComponentProps<typeof Header> = {
    ...headerProps,
    activeTab,
    onTabChange: setActiveTab,
  };

  return (
    <div className="app">
      <Header {...headerComponentProps} />

      <main className="app-main">
        <div className="dashboard">
          {/* Hero Banner */}
          <div className="dashboard-hero">
            <div>
              <h1 className="dashboard-hero-title">Добро пожаловать 👋</h1>
              <p className="dashboard-hero-desc">
                Прокрутите страницу вниз, чтобы увидеть iOS-style progressive
                blur на header. А при нажатии кнопки ниже вкладки навигации
                плавно анимируются во второй ряд без фона с эффектом матового
                стекла!
              </p>
            </div>
            <div className="dashboard-hero-controls">
              <div className="dashboard-status-badge">
                <Zap size={16} /> Система активна
              </div>
            </div>
          </div>
          <div className="dashboard-stats"></div>
        </div>
      </main>
    </div>
  );
}
