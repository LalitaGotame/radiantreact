import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AllCoursesPage from './pages/AllCoursesPage.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import FeaturedCoursesPage from './pages/FeaturedCoursesPage.jsx'
import SavedCoursesPage from './pages/SavedCoursesPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/courses" element={<AllCoursesPage />} />
         <Route path="/featured" element={<FeaturedCoursesPage />} />
        <Route path="/saved" element={<SavedCoursesPage />} />
      </Route>
    </Routes>
  )
}  