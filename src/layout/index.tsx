import React from 'react'
import Sidebar from '../components/sidemenu/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function index() {
    return (<>
        <div className="min-h-screen bg-main-background bg-no-repeat bg-contain flex " style={{ backgroundSize:'100%',backgroundPosition: "850px 100px" }}>
            {/* Sidebar */}
            <div className="lg:w-64 w-16 bg-white fixed md:relative z-10 md:z-auto transition-all">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 backdrop-blur-sm">
                <Navbar />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>

    </>)
}

export default index