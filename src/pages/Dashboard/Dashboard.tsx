import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Smartphone, Zap } from 'lucide-react';
import './Dashboard.css';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileView, setIsMobileView] = useState(false);

  return (
    <div className={`app ${isMobileView ? 'is-mobile-view' : ''}`}>
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isMobileView={isMobileView}
        onToggleMobileView={() => setIsMobileView(!isMobileView)}
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
              <button
                onClick={() => setIsMobileView(!isMobileView)}
                className={`dashboard-test-btn ${isMobileView ? 'active' : ''}`}
              >
                <Smartphone size={16} />
                {isMobileView ? 'Вернуть десктопный вид' : 'Тест 2-рядного мобильного Header'}
              </button>
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