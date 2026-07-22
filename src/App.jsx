import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AllCoursesPage from './pages/AllCoursesPage.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import FeaturedCoursesPage from './pages/FeaturedCoursesPage.jsx'
import SavedCoursesPage from './pages/SavedCoursesPage.jsx'
import AllLiveClassesPage from './pages/AllLiveClassesPage.jsx'
import MySubscriptionsPage from './pages/MySubscriptionsPage.jsx'
import CoursesProgressPage from './pages/CoursesProgressPage.jsx'
import PurchaseHistoryPage from './pages/PurchaseHistoryPage.jsx'
import MyProfilePage from './pages/MyProfilePage.jsx'   

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
        <Route path="/all-live-class" element={<AllLiveClassesPage />} />
        <Route path="/subscriptions" element={<MySubscriptionsPage />} />
        <Route path="/progress" element={<CoursesProgressPage />} />
        <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
        <Route path="/profile" element={<MyProfilePage/>}>
      </Route>
    </Route>
    </Routes>
  )
}  