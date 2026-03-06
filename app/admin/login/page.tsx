"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (email === "admin@digispect.com" && password === "123456") {
      window.location.href = "/admin/dashboard";
      return;
    }

    setError("Invalid credentials");
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-400">Use your credentials to access CMS controls.</p>
        <input placeholder="email" onChange={(event) => setEmail(event.target.value)} className="mt-6 w-full rounded-lg border border-white/20 bg-slate-950 p-3" />
        <input
          placeholder="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className="mt-4 w-full rounded-lg border border-white/20 bg-slate-950 p-3"
        />
        {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
        <button onClick={login} className="mt-6 w-full rounded-lg bg-brandBlue px-5 py-3 font-semibold hover:bg-blue-500">
          Login
        </button>
      </div>
    </main>
  );
}
