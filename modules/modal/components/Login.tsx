import { useState } from "react";

export function Login({ setLogin, setSignup, onLoginSuccess }: { setLogin: any, setSignup: any, onLoginSuccess?: () => void }) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      console.log("Login success:", data);
      // Save token in localStorage or context if you want
      localStorage.setItem("token", data.token);
      onLoginSuccess?.();
      alert("Login successful!");
      setLogin(false); // hide login form
      // optionally redirect to dashboard
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login to Your Account</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg p-3 font-semibold hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>

      <p className="text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <button
          type="button"
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={() => {
            setLogin(false);
            setSignup(true);
          }}
        >
          Sign Up
        </button>
      </p>
    </form>
  )
}