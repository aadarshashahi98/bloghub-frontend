import { useState } from "react";

export function SignUp({ setLogin, setSignup }: { setLogin: any, setSignup: any }) {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);

    if (data.message === "User created successfully") {
      setSignup(false);
      setLogin(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h2>

      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
      />

      <input
        name="middleName"
        type="text"
        placeholder="Middle Name (optional)"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
      />

      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-3"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg p-3 font-semibold hover:bg-blue-600"
      >
        Sign Up
      </button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?
        <button
          type="button"
          className="text-blue-500 hover:underline ml-1 cursor-pointer"
          onClick={() => {
            setLogin(true);
            setSignup(false);
          }}
        >
          Login
        </button>
      </p>
    </form>
  );
}