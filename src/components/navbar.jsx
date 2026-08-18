import React from 'react'
import { FaBell } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav
            id="whole_navbar"
            className="fixed top-0 left-60 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-50"
        >

            {/* Burger */}
            <button
                id="burger-icon"
                className="text-2xl text-slate-600 hover:text-slate-900"
            >
                ☰
            </button>

            {/* Right side */}
            <div className="flex items-center gap-6">

                {/* Notification */}
                <button
                    id="notification"
                    className="relative text-slate-600 hover:text-slate-900"
                >
                    <FaBell className="text-xl" />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                        3
                    </span>
                </button>

                {/* User */}
                <div
                    id="login-image-and-name"
                    className="flex items-center gap-3"
                >
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        A
                    </div>

                    <h4 className="text-sm font-medium text-slate-700">
                        Welcome, Awais
                    </h4>
                </div>

            </div>

        </nav>
    )
}

export default Navbar