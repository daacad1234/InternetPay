import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaChartLine,
    FaHistory,
    FaTimes,
    FaDownload,
    FaClipboardList,
    FaBars,
    FaSignOutAlt,
    FaUsers,
    FaTrash
} from 'react-icons/fa';




function AdminDashboard() {
    const { user, logout, getAllUsers, deleteUser } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('history');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [users, setUsers] = useState([]);

    React.useEffect(() => {
        setUsers(getAllUsers());
    }, []);

    const history = users.flatMap(u =>
        (u.paymentHistory || []).map(tx => ({ ...tx, user: u.name, userId: u.id }))
    ).sort((a, b) => new Date(b.date) - new Date(a.date));

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const menuItems = [
        { id: 'history', label: 'Payment Monitoring', icon: <FaHistory /> },
        { id: 'reports', label: 'Monthly Reports', icon: <FaClipboardList /> },
        { id: 'users', label: 'Customer Management', icon: <FaUsers /> },
    ];

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this customer? This action cannot be undone.")) {
            deleteUser(userId);
            setUsers(getAllUsers()); 
        }
    };



    if (!user || user.role !== 'admin') {
        return <div className="p-10 text-center">Access Denied</div>;
    }

    return (
        <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <aside className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-slate-900 text-slate-300 shadow-2xl transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="h-full flex flex-col">
                    <div className="p-8 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/50">
                                <FaChartLine />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-white tracking-wide">ADMIN</h2>
                                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Portal v2.0</p>
                            </div>
                        </div>
                        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-500">
                            <FaTimes />
                        </button>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setIsSidebarOpen(false);
                                }}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${activeTab === item.id
                                    ? 'bg-indigo-600/10 text-white shadow-inner border border-white/5'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className={`text-lg transition-transform group-hover:scale-110 ${activeTab === item.id ? 'text-indigo-500' : 'text-slate-600'}`}>
                                    {item.icon}
                                </span>
                                {item.label}
                                {activeTab === item.id && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                )}
                            </button>
                        ))}
                    </nav>

                    <div className="p-6 border-t border-white/5">
                        <button onClick={handleLogout} className="flex items-center gap-4 px-4 py-3 w-full text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all text-sm font-medium">
                            <FaSignOutAlt /> Logout
                        </button>
                    </div>
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto relative bg-slate-100 w-full">

                <div className="md:hidden sticky top-0 z-10 bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-sm">
                    <span className="font-bold text-slate-800">Admin Portal</span>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-2 text-slate-600 bg-slate-50 rounded-lg"
                    >
                        <FaBars />
                    </button>
                </div>

                <div className="p-6 md:p-10 max-w-[1600px] mx-auto">
                    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-green-600 uppercase tracking-widest">System Operational</span>
                            </div>
                            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                                {menuItems.find(m => m.id === activeTab)?.label}
                            </h1>
                        </div>

                        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-800">Administrator</p>
                            </div>
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold border border-slate-200">
                                A
                            </div>
                        </div>
                    </header>


                    {activeTab === 'history' && (
                        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-8 border-b border-slate-100">
                                <h2 className="text-xl font-bold text-slate-800">Payment Monitoring</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-100">
                                        <tr>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Tx ID</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">User</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Amount</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Date</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Method</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {history.map((h) => (
                                            <tr key={h.id} className="hover:bg-slate-50 transition">
                                                <td className="p-6 font-mono text-xs text-slate-500">{h.id}</td>
                                                <td className="p-6 font-bold text-slate-800 text-sm">{h.user}</td>
                                                <td className="p-6 font-bold text-emerald-600">{h.amount}</td>
                                                <td className="p-6 text-slate-500 text-sm">{h.date}</td>
                                                <td className="p-6 text-slate-600 text-sm">{h.method}</td>
                                            </tr>
                                        ))}
                                        {history.length === 0 && (
                                            <tr><td colSpan="5" className="p-8 text-center text-slate-400">No transactions found.</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}


                    {activeTab === 'users' && (
                        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-slate-800">Customer Management</h2>
                                <span className="bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold border border-indigo-100">
                                    {users.length} Registered Customers
                                </span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-100">
                                        <tr>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Customer Name</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Email</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Plan</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Amount Due</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider">Status</th>
                                            <th className="p-6 font-bold text-slate-400 text-xs uppercase tracking-wider text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {users.map((u) => (
                                            <tr key={u.id} className="hover:bg-slate-50 transition">
                                                <td className="p-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
                                                            {u.name.charAt(0)}
                                                        </div>
                                                        <span className="font-bold text-slate-800 text-sm">{u.name}</span>
                                                    </div>
                                                </td>
                                                <td className="p-6 text-slate-500 text-sm">{u.email}</td>
                                                <td className="p-6 text-slate-600 text-sm">{u.plan || 'N/A'}</td>
                                                <td className="p-6 font-bold text-slate-900">${u.amountDue?.toFixed(2) || '0.00'}</td>
                                                <td className="p-6">
                                                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${u.status === 'Active'
                                                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                                        : 'bg-red-50 text-red-700 border-red-100'
                                                        }`}>
                                                        {u.status}
                                                    </span>
                                                </td>
                                                <td className="p-6 text-right">
                                                    <button
                                                        onClick={() => handleDeleteUser(u.id)}
                                                        className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                                                        title="Delete Customer"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {users.length === 0 && (
                                            <tr><td colSpan="6" className="p-8 text-center text-slate-400">No customers found.</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reports' && (
                        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-slate-800">Monthly Financial Reports</h2>
                            </div>
                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                                    {(() => {

                                        const monthlyData = history.reduce((acc, tx) => {
                                            const date = new Date(tx.date);
                                            const key = date.toLocaleString('default', { month: 'long', year: 'numeric' });
                                            if (!acc[key]) acc[key] = { total: 0, count: 0 };
                                            acc[key].count += 1;

                                            const valStr = String(tx.amount || '0');
                                            const amount = parseFloat(valStr.replace(/[^0-9.]/g, '')) || 0;
                                            acc[key].total += amount;
                                            return acc;
                                        }, {});

                                        const months = Object.keys(monthlyData);

                                        if (months.length === 0) {
                                            return <div className="col-span-3 text-center text-slate-500 py-8">No transaction data available to generate reports.</div>;
                                        }

                                        return months.map(month => (
                                            <div key={month} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                <h3 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">{month}</h3>
                                                <div className="flex justify-between items-end">
                                                    <span className="text-2xl font-extrabold text-slate-800">${monthlyData[month].total.toFixed(2)}</span>
                                                    <span className="text-xs font-bold bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100 text-slate-600">
                                                        {monthlyData[month].count} txns
                                                    </span>
                                                </div>
                                            </div>
                                        ));
                                    })()}
                                </div>

                                <h3 className="font-bold text-slate-800 mb-4">Detailed Breakdown</h3>
                                <div className="overflow-x-auto rounded-xl border border-slate-100">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50">
                                            <tr>
                                                <th className="p-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Month</th>
                                                <th className="p-4 font-bold text-slate-400 text-xs uppercase tracking-wider">User</th>
                                                <th className="p-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Total Revenue</th>
                                                <th className="p-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Transactions</th>
                                                <th className="p-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">

                                            {history.map((tx, idx) => {
                                                const date = new Date(tx.date);
                                                const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
                                                return (
                                                    <tr key={idx}>
                                                        <td className="p-4 font-bold text-slate-800">{monthYear}</td>
                                                        <td className="p-4 text-slate-600 font-medium">{tx.user}</td>
                                                        <td className="p-4 font-mono text-emerald-600 font-bold">{tx.amount}</td>
                                                        <td className="p-4 text-slate-600">1</td>
                                                        <td className="p-4"><span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Finalized</span></td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}





                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
