import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        // Only allow admin credentials
        if (email !== 'admin@test.com') {
            setError("This is not allowed for you. Admin access only.");
            return;
        }

        const success = login(email, password);

        if (success) {
            navigate("/admin");
        } else {
            setError("Invalid admin credentials. Please check your email and password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200">

                <div className="flex justify-center mb-4 text-indigo-600 text-4xl">🔐</div>

                <h2 className="text-2xl font-semibold text-center text-slate-800">Admin Portal</h2>
                <p className="text-slate-500 text-center text-sm mt-1">
                    Authorized personnel only
                </p>

                {error && (
                    <div className="mt-6 w-full min-h-[60px] bg-red-50 border-2 border-red-200 text-red-700 rounded-xl shadow-lg shadow-red-100 flex items-center justify-center px-4 py-3 gap-3">
                        <span className="text-xl bg-red-100 w-8 h-8 flex items-center justify-center rounded-full">⚠️</span>
                        <p className="font-bold text-sm leading-tight text-center">
                            {error}
                        </p>
                    </div>
                )}

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                    <input
                        type="email"
                        className="w-full bg-slate-100 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Admin Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full bg-slate-100 px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Admin Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
                        Login as Admin
                    </button>
                </form>

                <p className="text-center text-xs mt-6 text-slate-400">
                    Admin credentials required • No registration available
                </p>
            </div>
        </div>
    );
}
