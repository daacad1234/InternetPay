import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaWifi,
    FaHistory,
    FaSignOutAlt,
    FaArrowRight,
    FaBars,
    FaTimes,
    FaRocket,
    FaBolt,
    FaCheckCircle
} from 'react-icons/fa';

function DashboardPage() {
    const { user, logout, AVAILABLE_PACKAGES, selectPackage } = useAuth();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FaWifi /> },
        { id: 'history', label: 'Payment History', icon: <FaHistory /> },
    ];

    return (
        <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden glass"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:shadow-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="h-full flex flex-col">
                    {/* Logo Area */}
                    <div className="p-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30">
                                <FaWifi />
                            </div>
                            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Internet<span className="text-blue-600">Pay</span></h1>
                        </div>
                        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveMenu(item.id);
                                    setIsSidebarOpen(false);
                                }}
                                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 group ${activeMenu === item.id
                                    ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <span className={`text-lg transition-transform group-hover:scale-110 ${activeMenu === item.id ? 'text-blue-600' : 'text-gray-400'}`}>
                                    {item.icon}
                                </span>
                                {item.label}
                                {activeMenu === item.id && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* User Profile & Logout */}
                    <div className="p-4 border-t border-gray-100">
                        <div className="bg-gray-50 p-4 rounded-2xl mb-2 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold shadow-md">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative w-full">
                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm shadow-md">
                            <FaWifi />
                        </div>
                        <span className="font-bold text-gray-900">InternetPay</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                        <FaBars />
                    </button>
                </div>

                <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">

                    {/* Header / Welcome */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-gray-500 font-medium mb-1">Welcome back,</h2>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {user?.name?.split(' ')[0]} 👋
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            {user?.plan && (
                                <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-sm font-bold text-gray-700">{user.plan}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Package Selection Screen (If no plan selected) */}
                    {activeMenu === 'dashboard' && !user?.plan && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="max-w-3xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Internet Package</h3>
                                <p className="text-gray-500 font-medium">Select the best plan that fits your needs. You can upgrade or change later.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {AVAILABLE_PACKAGES.map((pkg) => (
                                    <div
                                        key={pkg.id}
                                        className="group relative bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                                    >
                                        <div className="mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                                {pkg.speed === '20 Mbps' && <FaWifi size={24} />}
                                                {pkg.speed === '40 Mbps' && <FaBolt size={24} />}
                                                {pkg.speed === '60 Mbps' && <FaBolt size={24} />}
                                                {pkg.speed === '100 Mbps' && <FaRocket size={24} />}
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h4>
                                            <p className="text-blue-600 font-extrabold text-sm uppercase tracking-wider">{pkg.speed}</p>
                                        </div>

                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-1 mb-6">
                                                <span className="text-4xl font-black text-gray-900">${pkg.price}</span>
                                                <span className="text-gray-400 font-medium">/month</span>
                                            </div>
                                            <ul className="space-y-3">
                                                {pkg.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                                                        <FaCheckCircle className="text-emerald-500" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button
                                            onClick={() => {
                                                selectPackage(pkg.name, pkg.price);
                                                navigate('/payment');
                                            }}
                                            className="mt-auto w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-gray-900/10 hover:shadow-blue-500/30"
                                        >
                                            Select Plan
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Header / Welcome content continued... */}
                    {activeMenu === 'dashboard' && user?.plan && (
                        <>
                            {/* Bill Card */}
                            <div className={`p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-500 group ${user?.paymentStatus === 'Paid' ? 'bg-gradient-to-br from-emerald-500 to-teal-700' : 'bg-gradient-to-br from-slate-800 to-gray-900'}`}>
                                {/* Background Decor */}
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-black opacity-10 rounded-full blur-3xl"></div>

                                <div className="relative z-10 text-white">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <p className="text-white/60 font-medium mb-1 text-sm tracking-wide uppercase">Current Balance</p>
                                            <h2 className="text-5xl font-bold tracking-tight">
                                                {user?.paymentStatus === 'Paid' ? '$0.00' : `$${user?.amountDue?.toFixed(2) || '25.00'}`}
                                            </h2>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${user?.paymentStatus === 'Paid' ? 'bg-emerald-400/20 border-emerald-400/30 text-emerald-100' : 'bg-white/10 border-white/10 text-white/80'}`}>
                                            {user?.paymentStatus === 'Paid' ? 'Paid' : 'Unpaid'}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                                        <div>
                                            <p className="text-white/50 text-xs font-bold uppercase mb-1">Plan</p>
                                            <p className="font-semibold text-lg">{user?.plan || 'Fiber 20Mbps'}</p>
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs font-bold uppercase mb-1">Account ID</p>
                                            <p className="font-mono text-white/90">#839201</p>
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs font-bold uppercase mb-1">Billing Period</p>
                                            <p className="font-semibold">Jan 2026</p>
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs font-bold uppercase mb-1">Due Date</p>
                                            <p className={`font-bold ${user?.paymentStatus === 'Paid' ? 'text-emerald-300' : 'text-orange-300'}`}>
                                                {user?.due || '10 Jan 2026'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex gap-4">
                                        {user?.paymentStatus !== 'Paid' && (
                                            <Link to="/payment" className="flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg shadow-white/10">
                                                Pay Bill <FaArrowRight />
                                            </Link>
                                        )}
                                        <Link to="/receipt" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl font-bold hover:bg-white/20 transition text-white">
                                            Latest Receipt
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </>
                    )}

                    {/* Payment History View */}
                    {activeMenu === 'history' && (
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-8 border-b border-gray-50 flex items-center gap-3">
                                <FaHistory className="text-blue-600 text-xl" />
                                <h2 className="text-xl font-bold text-gray-900">Payment History</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                                        <tr>
                                            <th className="p-6 font-bold">Month</th>
                                            <th className="p-6 font-bold">Date</th>
                                            <th className="p-6 font-bold">Amount</th>
                                            <th className="p-6 font-bold">Method</th>
                                            <th className="p-6 font-bold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {(user?.paymentHistory || []).map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition duration-300">
                                                <td className="p-6 text-gray-900 font-semibold italic">
                                                    {new Date(item.date).toLocaleString('default', { month: 'long' })}
                                                </td>
                                                <td className="p-6 text-gray-500 text-sm">{item.date}</td>
                                                <td className="p-6 font-bold text-emerald-600">{item.amount}</td>
                                                <td className="p-6 text-gray-600 text-sm font-medium">{item.method}</td>
                                                <td className="p-6">
                                                    <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-emerald-100">
                                                        {item.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                        {(user?.paymentHistory || []).length === 0 && (
                                            <tr>
                                                <td colSpan="5" className="p-20 text-center">
                                                    <div className="flex flex-col items-center gap-4 text-gray-400">
                                                        <FaHistory className="text-5xl opacity-20" />
                                                        <p className="font-medium">No payments recorded yet.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for other tabs (if any added later) */}
                    {activeMenu !== 'dashboard' && activeMenu !== 'history' && (
                        <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
                            <p className="text-gray-500">This feature is under development.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;