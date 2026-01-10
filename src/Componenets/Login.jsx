import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");


        if (email === 'admin@test.com') {
            setError("Meshan user loguma tala galin. Kaliya Admin logu tala galay");
            return;
        }

        const success = login(email, password);

        if (success) {
            navigate("/dashboard");
        } else {
            setError("Invalid email or password. Please check your credentials.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

                <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
                <p className="text-gray-500 text-center text-sm mt-1">
                    Login to manage your internet bill payments
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
                        className="w-full bg-gray-100 px-4 py-2 rounded-lg"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full bg-gray-100 px-4 py-2 rounded-lg"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Login
                    </button>
                </form>



                <p className="text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600">Register</Link>
                </p>
            </div>
        </div>
    );
}
