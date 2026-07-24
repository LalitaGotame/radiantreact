import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
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
import SettingsPage from './pages/SettingsPage.jsx'
import SupportPage from './pages/SupportPage.jsx'
import FeedbackPage from './pages/FeedbackPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
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
        <Route path="/profile" element={<MyProfilePage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/feedback" element={<FeedbackPage/>}/>
     
    </Route>
    </Routes>
  )
}  