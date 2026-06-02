"use client"
import { LoginSignupModalModule } from "@/modules/modal/LoginSignupModalModule"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

function Header() {
  const pathname = usePathname()
  const [login, setLogin] = useState(false)
  const [signup, setSignup] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Sync login state with localStorage
  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/browse" },
    ...(isLoggedIn ? [{ name: "Submit Content", path: "/submit-content" }] : []),
  ]

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false) // instantly update header
  }

  return (
    <>
      <header className="flex justify-between p-5 mx-20">
        <div className="flex gap-3">
          <p className="font-bold">BlogHub</p>
          <p>· Community-driven content platform</p>
        </div>

        <nav>
          <ul className="flex gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`p-2 px-3 rounded-lg ${
                      isActive ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <>
              <button onClick={() => setLogin(true)} className="hover:text-[#0aa0f6] cursor-pointer duration-500 hover:drop-shadow-[0_0_10px_#00ffff]">Login</button>
              <span className="h-5 w-[2px] bg-black"></span>
              <button onClick={() => setSignup(true)} className="hover:text-[#0aa0f6] cursor-pointer duration-500 hover:drop-shadow-[0_0_10px_#00ffff]">Sign Up</button>
            </>
          )}
          {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
        </div>
      </header>

      <LoginSignupModalModule
        login={login}
        setLogin={setLogin}
        signup={signup}
        setSignup={setSignup}
        onLoginSuccess={() => setIsLoggedIn(true)} // instantly update header after login
      />

      <div className="h-px bg-black mx-20"></div>
    </>
  )
}

export default Header