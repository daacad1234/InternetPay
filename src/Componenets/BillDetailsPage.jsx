import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaArrowLeft, FaFileInvoiceDollar, FaRegCalendarAlt, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

function BillDetailsPage() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const billAmount = user?.amountDue || 0;
    const dueDate = user?.due || 'N/A';
    const planName = user?.plan || 'No Active Plan';
    const status = user?.paymentStatus || 'Unpaid';

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-gray-600 mb-8 hover:text-black transition font-medium"
                >
                    <FaArrowLeft /> Back to Dashboard
                </button>

                <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <p className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-2">Current Billing Details</p>
                                <h1 className="text-3xl md:text-4xl font-black">{planName}</h1>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                                <p className="text-blue-100 text-xs font-bold uppercase mb-1 text-center">Amount Due</p>
                                <p className="text-3xl font-black">${billAmount.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <FaRegCalendarAlt />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Due Date</p>
                                        <p className="text-gray-900 font-bold text-lg">{dueDate}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <FaFileInvoiceDollar />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Billing Period</p>
                                        <p className="text-gray-900 font-bold text-lg">{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <FaCheckCircle />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Payment Status</p>
                                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border mt-1 ${status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                            {status}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                                        <FaCreditCard />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Customer ID</p>
                                        <p className="text-gray-900 font-mono font-bold text-lg">#839201</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-10">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Assistance</h3>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    If you are experiencing any issues with your monthly billing or would like to discuss payment plans,
                                    please contact our 24/7 support line at <span className="text-blue-600 font-bold">+1 (555) 000-1234</span> or
                                    email us at <span className="text-blue-600 font-bold">billing@internetpay.com</span>.
                                </p>
                            </div>
                        </div>

                        {status !== 'Paid' && (
                            <button
                                onClick={() => navigate('/payment')}
                                className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-gray-900/10 hover:shadow-blue-500/30"
                            >
                                Proceed to Payment
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillDetailsPage;
