import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Zap } from 'lucide-react';
import './Dashboard.css';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="app-main">
        <div className="dashboard">
          {/* Hero Banner */}
          <div className="dashboard-hero">
            <div>
              <h1 className="dashboard-hero-title">Добро пожаловать 👋</h1>
              <p className="dashboard-hero-desc">
                Прокрутите страницу вниз, чтобы увидеть iOS-style progressive blur на header.
                А при нажатии кнопки ниже вкладки навигации плавно анимируются во второй ряд без фона с эффектом матового стекла!
              </p>
            </div>
            <div className="dashboard-hero-controls">
              <div className="dashboard-status-badge">
                <Zap size={16} /> Система активна
              </div>
            </div>
          </div>
          <div className="dashboard-stats">
          </div>
        </div>
      </main>
    </div>
  )
}