import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaArrowLeft, FaHistory } from 'react-icons/fa';

function PaymentHistoryPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const history = user?.paymentHistory || [];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-gray-600 mb-6 hover:text-black transition"
                >
                    <FaArrowLeft /> Back to Dashboard
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                        <FaHistory className="text-blue-600 text-xl" />
                        <h1 className="text-xl font-bold text-gray-900">Payment History</h1>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                                    <th className="p-4 font-semibold">Month</th>
                                    <th className="p-4 font-semibold">Date</th>
                                    <th className="p-4 font-semibold">Amount</th>
                                    <th className="p-4 font-semibold">Method</th>
                                    <th className="p-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {history.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition">
                                        <td className="p-4 text-gray-700 font-medium">
                                            {new Date(item.date).toLocaleString('default', { month: 'long' })}
                                        </td>
                                        <td className="p-4 text-gray-600">{item.date}</td>
                                        <td className="p-4 font-bold text-emerald-600">{item.amount}</td>
                                        <td className="p-4 text-gray-600">{item.method}</td>
                                        <td className="p-4">
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {history.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No payment history found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PaymentHistoryPage;
