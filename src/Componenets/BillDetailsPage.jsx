import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function BillDetailsPage() {
    const navigate = useNavigate();

    const details = {
        provider: "SomNet Fiber",
        accountNumber: "ACC-987654321",
        billMonth: "December 2025",
        amount: "$25.00",
        lateFee: "$2.00",
        totalDue: "$27.00",
        dueDate: "10 Jan 2026"
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 mb-6 hover:text-black transition"
                >
                    <FaArrowLeft /> Back
                </button>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-blue-600 p-6 text-white">
                        <h1 className="text-2xl font-bold">Bill Details</h1>
                        <p className="opacity-90">Review your monthly statement</p>
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                        <div className="flex justify-between items-center border-b pb-4">
                            <span className="text-gray-500">Service Provider</span>
                            <span className="font-semibold text-lg">{details.provider}</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-4">
                            <span className="text-gray-500">Account Number</span>
                            <span className="font-mono font-medium">{details.accountNumber}</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-4">
                            <span className="text-gray-500">Billing Period</span>
                            <span className="font-medium">{details.billMonth}</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-4">
                            <span className="text-gray-500">Plan Amount</span>
                            <span className="font-medium">{details.amount}</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-4">
                            <span className="text-gray-500">Late Fee</span>
                            <span className="font-medium text-red-500">{details.lateFee}</span>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <span className="text-gray-900 font-bold text-lg">Total Amount Due</span>
                            <span className="text-2xl font-bold text-gray-900">{details.totalDue}</span>
                        </div>

                        <div className="mt-8">
                            <Link
                                to="/billpayment"
                                className="block w-full bg-black text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg"
                            >
                                Pay {details.totalDue}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillDetailsPage;