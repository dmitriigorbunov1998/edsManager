export function Dashboard() {
  return (
    <div className="app">

      <main className="app-main">

        <div className="dashboard">
          <div className="dashboard-stats">

          </div>

          <div className="dashboard-content">
            <div className="dashboard-left">

            </div>
            <div className="dashboard-right">

              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Title</h3>

                <div className="district-item">
                  <div className="district-item-left">
                    <div className="district-dot" />
                    <span className="district-name"></span>
                  </div>

                  <span className="district-processing">Title</span>
                </div>
              </div>

              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Category</h3>
                <p className="category-text">Category</p>
              </div>

              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Workflow</h3>
                <div className="workflow-list">

                  <div className="workflow-step">
                    <span className="workflow-num">Number</span>
                    <span>key</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer className="app-footer">
        <div className="app-footer-inner">
          <span>Title version</span>
          <span>Tech</span>
        </div>
      </footer>
    </div>
  )
}