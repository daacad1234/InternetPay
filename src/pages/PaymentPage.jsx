import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaCreditCard, FaMobileAlt, FaPaypal, FaLock } from 'react-icons/fa';

function PaymentPage() {
    const navigate = useNavigate();
    const { user, markAsPaid } = useAuth();
    const [method, setMethod] = useState('card');
    const [loading, setLoading] = useState(false);

    // Default to 0 if user not found or field missing
    const billAmount = user?.amountDue ? parseFloat(user.amountDue) : 0.00;
    const lateFee = 0.00; // Fixed for now, can be dynamic later
    const totalAmount = billAmount + lateFee;

    const handlePayment = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate processing delay
        setTimeout(() => {
            setLoading(false);

            const transaction = {
                id: 'PAY-' + Math.floor(Math.random() * 1000000),
                amount: `$${totalAmount.toFixed(2)}`,
                date: new Date().toLocaleDateString(),
                method: method === 'card' ? 'Credit Card' : method === 'mobile' ? 'Mobile Money' : 'PayPal',
                status: 'Success'
            };

            markAsPaid(transaction);

            // Navigate to receipt with payment details
            navigate('/receipt', { state: transaction });
        }, 2000);
    };

    if (billAmount <= 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaMobileAlt className="text-3xl text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">All Paid Up!</h2>
                    <p className="text-gray-500 mb-6">You have no outstanding bills at this moment.</p>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Summary Section */}
                <div className="w-full md:w-1/3 bg-gray-900 p-8 text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Monthly Bill</span>
                                <span>${billAmount.toFixed(2)}</span>
                            </div>
                            {lateFee > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Late Fee</span>
                                    <span>${lateFee.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <FaLock /> Secure Payment
                        </div>
                    </div>
                </div>

                {/* Payment Form Section */}
                <div className="w-full md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Payment Method</h2>

                    {/* Method Selection */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <button
                            onClick={() => setMethod('card')}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition ${method === 'card' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                        >
                            <FaCreditCard className="text-2xl mb-2" />
                            <span className="text-sm font-medium">Card</span>
                        </button>
                        <button
                            onClick={() => setMethod('mobile')}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition ${method === 'mobile' ? 'border-green-600 bg-green-50 text-green-600' : 'border-gray-200 hover:border-green-300'}`}
                        >
                            <FaMobileAlt className="text-2xl mb-2" />
                            <span className="text-sm font-medium">EVC / Zaad</span>
                        </button>
                        <button
                            onClick={() => setMethod('paypal')}
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition ${method === 'paypal' ? 'border-blue-800 bg-blue-50 text-blue-800' : 'border-gray-200 hover:border-blue-300'}`}
                        >
                            <FaPaypal className="text-2xl mb-2" />
                            <span className="text-sm font-medium">PayPal</span>
                        </button>
                    </div>

                    <form onSubmit={handlePayment}>
                        {method === 'card' && (
                            <div className="space-y-4 animate-fadeIn">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                        <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                        <input type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                    </div>
                                </div>
                            </div>
                        )}

                        {method === 'mobile' && (
                            <div className="space-y-4 animate-fadeIn">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input type="tel" placeholder="+252 61 XXX XXXX" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500" required />
                                </div>
                                <p className="text-sm text-gray-500">You will receive a USSD prompt on your phone to confirm payment.</p>
                            </div>
                        )}

                        {method === 'paypal' && (
                            <div className="text-center py-4 animate-fadeIn">
                                <p className="text-gray-600 mb-4">You will be redirected to PayPal to complete your purchase.</p>
                            </div>
                        )}

                        <button
                            disabled={loading}
                            className={`w-full mt-8 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Processing...' : `Pay Now $${totalAmount.toFixed(2)}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
