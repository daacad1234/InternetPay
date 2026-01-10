import Header from "./Componenets/Header"
import Footer from "./Componenets/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Login from "./Componenets/Login"
import AdminLogin from "./Componenets/AdminLogin"
import Register from "./Componenets/Register"
import AdminDashboard from "./Componenets/AdminDashboard"
import DashboardPage from "./Componenets/DashboardPage"
import BillDetailsPage from "./Componenets/BillDetailsPage"
import PaymentHistoryPage from "./Componenets/PaymentHistoryPage"
import PaymentPage from "./pages/PaymentPage"
import ReceiptPage from "./pages/ReceiptPage"
import ProtectedRoute from "./Componenets/ProtectedRoute"
import { Routes, Route, useLocation } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

function AppContent() {
  const location = useLocation();
  const publicPaths = ["/", "/about", "/services"];
  const showHeaderFooter = publicPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={
          <ProtectedRoute requireAdmin={true}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute requireCustomer={true}>
            <DashboardPage />
          </ProtectedRoute>
        } />

        <Route path="/payment" element={
          <ProtectedRoute requireCustomer={true}>
            <PaymentPage />
          </ProtectedRoute>
        } />

        <Route path="/receipt" element={
          <ProtectedRoute requireCustomer={true}>
            <ReceiptPage />
          </ProtectedRoute>
        } />

        <Route path="/billdetails" element={
          <ProtectedRoute requireCustomer={true}>
            <BillDetailsPage />
          </ProtectedRoute>
        } />

        <Route path="/payment-history" element={
          <ProtectedRoute requireCustomer={true}>
            <PaymentHistoryPage />
          </ProtectedRoute>
        } />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App