import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { GrNotification } from 'react-icons/gr';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';
import ReactFlagsSelect from "react-flags-select";

const Index = () => {
    return (
        <nav className="bg-[#FBFBFB] p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Left Section: Search input */}
                <div className="relative w-[63%]">
                    <input
                        type="text"
                        className=" border p-2 h-14 bg-white text-gray-700 rounded-xl outline-none w-full"
                        placeholder="Search..."
                    />
                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <IoSearchOutline color='#A4A4A4' size={25} />
                        </button>
                    </span>
                </div>

                {/* Right Section: Language Selector, Icons, and Profile */}
                <div className="flex items-center space-x-6 ml-6">
                    {/* Language Selector */}
                    <ReactFlagsSelect
                    className='border border-white'
                      customLabels={{
                        "SA": { primary: "Arabic" },
                        "GB": { primary: "English" },
                        "FR": { primary: "Frensh" }
                      }}
                        countries={["GB","SA", "FR"]} selected={'GB'} 
                        onSelect={function (countryCode: string): void {
                            throw new Error('Function not implemented.');
                        } }    />
                   

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Notification Icon */}
                        <button className="text-white">
                            <GrNotification color='#2D9CDB' className='bg-blue-100 p-2 rounded-xl' size={35} />
                        </button>

                        {/* Messages Icon */}
                        <button className="text-white">
                            <MdOutlineMessage color='#2D9CDB' className='bg-blue-100 p-2 rounded-xl' size={35} />
                        </button>

                        {/* Settings Icon */}
                        <button className="text-white">
                            <CiSettings color='red' className='bg-red-100 p-1 rounded-xl' size={35} />
                        </button>
                    </div>

                    {/* Separator */}
                    <div className="h-6 w-px bg-white mx-4"></div>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="text-gray-700">
                            <p className="font-medium text-sm">Hello bro</p>
                        </div>
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Index;
