"use client";

 import Link from "next/link";
 import { useState } from "react";
 import { useRouter } from "next/navigation";
import { handlelogin } from 'better-auth/next-js';


 export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const handlelogin = async(e) => {
    e.preventDefault();

    // navigate to home page
    if (!error) {
      router.push("/");
    }
  };

  return (
    <form onSubmit={handlelogin}>
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
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button type="submit"
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-500 px-3 py-1 rounded">
              Login
            </button>

          <Link href="/register"  className="bg-green-500 px-3 py-1 rounded inline-block">
           Register
          </Link>
          </div>
        )}
      </div>
    </nav>
    </form>
  );
 }


