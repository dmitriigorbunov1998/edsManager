import { useTranslation } from '../../i18n';
import './Header.css';

export function Header() {
    const { t } = useTranslation();
    
    return (
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

                    <div className="header-status">
                        <div className="header-status-dot" />
                        <span className="header-status-text">●</span>
                    </div>

                </div>

                <nav className="header-center">

                    <button
                        className="header-tab"
                    >
                        tab.labelKey
                    </button>
                </nav>

                <div className="header-right">
                    <div className="header-user">
                        <div className="header-avatar">User Initials</div>
                        <span className="header-user-name">User Name</span>   
                    </div>

                    <button className="header-btn">
                        {/* <Globe size={18} /> */}
                    </button>

                    <div className="header-theme-menu">
                        {/* <button
                            className="header-btn"
                        >
                            <ThemeIcon size={18} />
                        </button> */}

                        <div className="header-theme-dropdown">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}