import { useState, useRef, useEffect } from 'react';
import { Activity, Settings, Database, Sun, Moon, Monitor, LogOut, Globe } from 'lucide-react';
import { useTranslation } from '../../i18n';
import { type Theme } from '../../types';
import './Header.css';

interface HeaderProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const tabs = [
    { id: 'dashboard', label: 'Панель управления', icon: Activity },
    { id: 'config', label: 'Настройки', icon: Settings },
    { id: 'database', label: 'База данных', icon: Database },
];

const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: 'Светлая', icon: Sun },
    { value: 'dark', label: 'Тёмная', icon: Moon },
    { value: 'system', label: 'Системная', icon: Monitor},
];

export function Header({ activeTab, onTabChange }: HeaderProps) {
    const [theme, setTheme] = useState('system');
    const [themeMenuOpen, setThemeMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { t, lang, setLang } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setThemeMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    let ThemeIcon;
    if (theme === 'system') {
        ThemeIcon = Monitor;
    } else if (theme === 'dark') {
        ThemeIcon = Moon;
    } else {
        ThemeIcon = Sun;
    }

    const toggleLang = () => {
        setLang(lang === 'ru' ? 'en' : 'ru');
    }
    
    return (
        <div className="header-wrapper">

            {/* Semi-transparent dark overlay that also fades */}
            <div  className="progressive-blur-bg" />

            {/* Subtle border at the header bottom */}
            <div className="progressive-blur-border" />
            
            {/* Actual header content */}
            <header className="header">
                <div className="header-inner">
                    <div className="header-left">
                        <div className="header-logo">
                            <span>E</span>
                        </div>
                        <div className="header-brand">
                            <div className="header-title">{t('app.title')}</div>
                            <div className="header-subtitle">{t('app.subtitle')}</div>
                        </div>
                        {/* {isRunning && ( */}
                            <div className="header-status">
                            <div className="header-status-dot" />
                            <span className="header-status-text">Работает</span>
                        </div>
                        {/* )} */}
                    </div>

                    {/* Navigation tabs — transforms into Row 2 without background on mobile (< 768px) */}
                    <nav className="header-center">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange(tab.id)}
                                className={`header-tab ${activeTab === tab.id ? 'active' : ''}`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </nav>

                    <div className="header-right">
                        <div className="header-user">
                            <div className="header-avatar">ДГ</div>
                            <span className="header-user-name">Дмитрий Горбунов</span>   
                        </div>
                        
                        <button
                            className="header-btn"
                            onClick={toggleLang}
                            title={t('lang.toggle')}
                        >
                            <Globe size={18} />
                            <span>
                                {lang === "ru" ? 'RU' : 'EN'}
                            </span>
                        </button>

                        <div className="header-theme-menu" ref={menuRef}>
                            <button
                                className="header-btn"
                                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                                title="Сменить тему"
                            >
                                <ThemeIcon size={18} />
                            </button>
                            
                            {themeMenuOpen && (
                                <div className="header-theme-dropdown">
                                    {themeOptions.map(opt => (
                                        <button
                                            key={opt.value}
                                            className={`header-theme-option ${theme === opt.value ? 'active' : ''}`}
                                            onClick={() => { 
                                                setTheme(opt.value);
                                                setThemeMenuOpen(false);
                                            }}
                                        >
                                            <opt.icon size={16} />
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            className="header-btn danger"
                            title="Выйти"
                        >
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}