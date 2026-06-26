export function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-left">
                    <div className="header-logo">
                        <span>E</span>
                    </div>
                    <div className="header-brand">
                        <div className="header-title">App.Title</div>
                        <div className="header-subtitle">App.Subtitle</div>
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
                </div>
            </div>
        </header>
    )
}