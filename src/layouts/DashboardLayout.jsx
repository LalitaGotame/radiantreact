import {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import DashboardTopbar from '../components/DashboardTopbar.jsx'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
     <div className="dashboard-shell">
      <Sidebar isOpen={sidebarOpen} />
      <div className="dashboard-main">
        <DashboardTopbar onMenuClick={() => setSidebarOpen((v) => !v)} />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}