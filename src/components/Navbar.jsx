"use client";

 import Link from "next/link";
 import { useState } from "react";

 export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      
      {/* Logo */}
      <div className="text-xl font-bold text-blue-400">
        SkillSphere
      </div>

      {/* Links */}
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/profile">My Profile</Link>
        </li>
      </ul>

      {/* Auth Section */}
      <div>
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 px-3 py-1 rounded"
            >
              Login
            </button>
            <button className="bg-green-500 px-3 py-1 rounded">
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
 }

