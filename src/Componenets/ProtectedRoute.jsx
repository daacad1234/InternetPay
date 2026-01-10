import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin = false, requireCustomer = false }) {
    const { user } = useAuth();


    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (requireCustomer && user.role === 'admin') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="text-6xl mb-4"></div>
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Access Denied</h2>
                    <p className="text-gray-600 mb-6">This is not allowed for you. This area is for customers only.</p>
                    <a href="/admin" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                        Go to Admin Dashboard
                    </a>
                </div>
            </div>
        );
    }

    if (requireAdmin && user.role !== 'admin') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="text-6xl mb-4"></div>
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Access Denied</h2>
                    <p className="text-gray-600 mb-6">This is not allowed for you. Admin access only.</p>
                    <a href="/dashboard" className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                        Go to Dashboard
                    </a>
                </div>
            </div>
        );
    }

    return children;
}
