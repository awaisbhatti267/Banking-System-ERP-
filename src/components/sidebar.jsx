import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaHome,
    FaUsers,
    FaUniversity,
    FaExchangeAlt,
    FaCreditCard,
    FaMoneyBillWave,
    FaChartBar,
    FaFileAlt,
    FaClipboardList,
    FaUserCog,
    FaCog,
    FaSignOutAlt
} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div
            id="whole-menu"
            className="fixed left-0 top-0 w-60 h-screen bg-gradient-to-b from-slate-900 to-blue-950 text-white px-3 py-4 flex flex-col box-border"
        >

            {/* Logo */}
            <div className="mb-5 shrink-0 flex items-center gap-3 px-1">
                <FaUniversity className="text-xl" />

                <h2 className="text-lg font-semibold">
                    Banking System
                </h2>
                <p className='text-sm'>ERP</p>
            </div>


            {/* Navigation */}
            <div
                className="flex-1 min-h-0 overflow-y-auto
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden"
            >

                {/* Dashboard */}
                <Link
                    to="#"
                    className="flex items-center gap-3 px-3 py-2 mb-4 rounded-md bg-blue-600 hover:bg-blue-500 transition text-sm font-medium"
                >
                    <FaHome className="text-sm" />
                    <span>Dashboard</span>
                </Link>


                {/* Main */}
                <div className="mb-4">

                    <h5 className="text-[10px] uppercase text-slate-400 mb-2 px-2">
                        Main
                    </h5>

                    <div className="flex flex-col">

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaUsers className="text-xs" />
                            <span>Customers</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaUniversity className="text-xs" />
                            <span>Accounts</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaExchangeAlt className="text-xs" />
                            <span>Transactions</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaExchangeAlt className="text-xs" />
                            <span>Transfers</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaCreditCard className="text-xs" />
                            <span>Cards</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaMoneyBillWave className="text-xs" />
                            <span>Loans</span>
                        </Link>

                    </div>
                </div>


                {/* Reports */}
                <div className="mb-4">

                    <h5 className="text-[10px] uppercase text-slate-400 mb-2 px-2">
                        Reports
                    </h5>

                    <div className="flex flex-col">

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaChartBar className="text-xs" />
                            <span>Analytics</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaFileAlt className="text-xs" />
                            <span>Reports</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaClipboardList className="text-xs" />
                            <span>Statements</span>
                        </Link>

                    </div>
                </div>


                {/* Settings */}
                <div>

                    <h5 className="text-[10px] uppercase text-slate-400 mb-2 px-2">
                        Settings
                    </h5>

                    <div className="flex flex-col">

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaUserCog className="text-xs" />
                            <span>Users</span>
                        </Link>

                        <Link
                            to="#"
                            className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-blue-900/60 transition text-sm"
                        >
                            <FaCog className="text-xs" />
                            <span>Settings</span>
                        </Link>

                    </div>
                </div>

            </div>


            {/* Logout */}
            <div className="pt-3 shrink-0">

                <button
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md bg-blue-900/50 hover:bg-blue-800/70 transition text-sm"
                >
                    <FaSignOutAlt className="text-sm" />
                    <span>Logout</span>
                </button>

            </div>

        </div>
    )
}

export default Sidebar