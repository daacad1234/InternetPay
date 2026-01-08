import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaDownload, FaHome } from 'react-icons/fa';

function ReceiptPage() {
    const location = useLocation();
    const state = location.state || {};
    const { id, amount, date, method } = state;
    const paymentId = id || state.paymentId || 'cwj-238238';
    const displayAmount = amount || '$0.00';
    const displayDate = date || '---';
    const displayMethod = method || '---';

    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-6xl text-green-500" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
                <p className="text-gray-500 mb-8">Thank you for your payment.</p>

                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 mb-8 text-left space-y-5">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-200/50">
                        <span className="text-slate-500 font-medium capitalize">Payment Status</span>
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Success</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Transaction ID</span>
                        <span className="font-mono font-bold text-slate-800 tracking-tight">{paymentId}</span>
                    </div>

                    <div className="flex justify-between items-center py-4 bg-white rounded-2xl px-5 border border-slate-200/50 shadow-sm">
                        <span className="text-slate-600 font-bold uppercase text-xs tracking-widest">Amount Paid</span>
                        <span className="text-2xl font-black text-slate-900 tracking-tighter">{displayAmount}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Date</span>
                            <span className="font-bold text-slate-800">{displayDate}</span>
                        </div>
                        <div className="flex flex-col gap-1 text-right">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Payment Method</span>
                            <span className="font-bold text-slate-800">{displayMethod}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={handleDownload}
                        className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
                    >
                        <FaDownload /> Download Receipt
                    </button>
                    <Link
                        to="/dashboard"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
                    >
                        <FaHome /> Return to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ReceiptPage;