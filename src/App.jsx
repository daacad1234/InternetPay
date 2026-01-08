import Header from "./Componenets/Header"
import Footer from "./Componenets/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Login from "./Componenets/Login"
import Register from "./Componenets/Register"
import AdminDashboard from "./Componenets/AdminDashboard"
import DashboardPage from "./Componenets/DashboardPage"
import BillDetailsPage from "./Componenets/BillDetailsPage"
import PaymentHistoryPage from "./Componenets/PaymentHistoryPage"
import PaymentPage from "./pages/PaymentPage"
import ReceiptPage from "./pages/ReceiptPage"
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
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/billdetails" element={<BillDetailsPage />} />
        <Route path="/payment-history" element={<PaymentHistoryPage />} />
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