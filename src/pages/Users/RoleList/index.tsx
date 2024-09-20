import React, { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { IoMdAddCircle } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import ToggleInput from '../../../components/ToogleInput'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const rolesData = [
    { role: 'Admin', permissions: 12 },
    { role: 'Manager', permissions: 10 },
    { role: 'Marketer', permissions: 8 },
    { role: 'Viewer', permissions: 4 },
    { role: 'ContrSelleributor', permissions: 6 },
    { role: 'Cancel follow', permissions: 6 },
    { role: 'Delivery', permissions: 6 },
];
function Index() {

    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleRowClick = (role: string) => {
        setSelectedRole(selectedRole === role ? null : role);
    };
    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <p className='text-lg text-[#00B074]'>Roles List</p>
            <div className="grid lg:grid-cols-3 gap-4">

                <div className="bg-white rounded-lg  p-4 gap-4 shadow-md">
                    <div className="flex-1 flex items-center w-full my-3">
                        <input
                            type="text"
                            className="w-full border p-2 bg-white text-gray-700 h-14 rounded-lg outline-none"
                            placeholder="Search..."
                        />
                        <IoSearchOutline className='-ml-10' size={20} color='#A4A4A4' />
                    </div>
                    <div className="flex justify-end items-center gap-3 my-3">
                        <IoMdAddCircle color='#00B074' />
                        <p className='underline'>Add a new role</p>
                    </div>

                    <div className="overflow-x-auto rounded-lg">
                        <table className="min-w-full table-auto border rounded-lg">
                            <thead className="border-b">
                                <tr className="text-start">
                                    <th className="px-5 py-2 text-start text-sm font-thin text-gray-700">Role</th>
                                    <th className="px-5 py-2 text-start text-sm font-thin text-gray-700">Permissions</th>
                                    <th className="px-5 py-2 text-start text-gray-700"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rolesData.map((roleData, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b hover:bg-[#F2F7FE] hover:border h-14  hover:border-[#0061FF] cursor-pointer relative"
                                        onClick={() => handleRowClick(roleData.role)}
                                    >
                                        <td className="px-6 py-2 text-start text-[#212B36]">{roleData.role}</td>
                                        <td className="px-6 py-2 text-start text-[#00B074]">{roleData.permissions} </td>
                                        <td className="px-6 py-2 text-start text-gray-700 font-bold"><PiDotsThreeOutlineVerticalFill /> </td>

                                        {selectedRole === roleData.role && (
                                            <td className="absolute top-10 right-0 bg-white shadow-md p-2 rounded z-50">
                                                <ul>
                                                    <li
                                                        className="flex items-center gap-3 text-blue-500  px-3 py-1 rounded cursor-pointer"
                                                        onClick={() => handleEdit(roleData.role)}
                                                    >
                                                        <MdEdit />
                                                        Edit
                                                    </li>
                                                    <li
                                                        className="flex items-center gap-3 text-red-500 hover:bg-gray-100 px-3 py-1 rounded cursor-pointer"
                                                        onClick={() => handleDelete(roleData.role)}
                                                    >
                                                        <FiTrash2 />  Delete
                                                    </li>
                                                </ul>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>


                <div className="lg:col-span-2 flex flex-col gap-4">



                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-[#6B6B6B] text-sm'>Role name</label>
                        <input type="text" name="" id="" className='h-14 rounded-xl border px-5' placeholder='Marketer' />
                    </div>
                    <p className='text-lg text-[#00B074]'>Permission</p>
                    <div className="w-full mx-auto mt-3 bg-white">
                        {/* Accordion for Dashboard */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center py-4 text-left text-black bg-gray-300 px-4 rounded-tr-xl rounded-tl-xl font-semibold focus:outline-none"
                                onClick={() => handleToggle(0)}
                            >
                                <span>Dashboard</span>
                                <span>{activeIndex === 0 ? <FaAngleDown /> : <FaAngleUp />}</span>
                            </button>
                            {activeIndex === 0 && (<>
                                <div className="px-4 pb-4 my-2">
                                    <h3 className="text-sm font-semibold mb-2">Permissions</h3>
                                    <div className="grid grid-flow-dense grid-cols-5 space-y-2">
                                        <div></div>
                                        <label className="flex items-center space-x-3 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span>Write</span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span>Read</span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span>Create</span>
                                        </label>
                                        <label className="flex items-center space-x-3">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span>Delete</span>
                                        </label>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex justify-start items-center gap-3 py-3'>
                                    <ToggleInput />
                                    <p>My Team</p>
                                </div>
                                <hr />
                                {/* accordionn */}
                                <div className="grid lg:grid-cols-5 gap-4 p-3">
                                    <div className="flex justify-start items-start align-top gap-4 -ml-3">
                                        <ToggleInput />
                                        <span className='text-xs mt-2'>KPI's</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Select ALL</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Total leads</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>New leads</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Confirmed leads</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>No replay</span>
                                        </label>
                                      
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Cancelled</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Cancelled price</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Confirmed leads</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Processing</span>
                                        </label>
                                      
                                    </div>
                                    <div className="flex flex-col  justify-end">
                                      
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Cancelled</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Cancelled price</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Confirmed leads</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Processing</span>
                                        </label>
                                      
                                    </div>
                                    <div className="flex flex-col  justify-end">
                                     
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Cancelled</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Cancelled price</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Confirmed leads</span>
                                        </label>
                                        <label className="flex items-center  gap-2 mt-2">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                            <span className='text-xs w-max'>Processing</span>
                                        </label>
                                      
                                    </div>
                                    
                                </div>
                                <hr />
                            </>)}
                        </div>

                        {/* Accordion for Product */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center py-4 text-left text-black bg-gray-300 px-4 font-semibold focus:outline-none"
                                onClick={() => handleToggle(1)}
                            >
                                <span>Product</span>
                                <span>{activeIndex === 1 ? <FaAngleDown /> : <FaAngleUp />}</span>
                            </button>
                            {activeIndex === 1 && (
                                <div className="px-4 pb-4">
                                    <p>Product-specific content here...</p>
                                </div>
                            )}
                        </div>

                        {/* Accordion for Sales */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center py-4 text-left text-black bg-gray-300 px-4 font-semibold focus:outline-none"
                                onClick={() => handleToggle(2)}
                            >
                                <span>Sales</span>
                                <span>{activeIndex === 2 ? <FaAngleDown /> : <FaAngleUp />}</span>
                            </button>
                            {activeIndex === 2 && (
                                <div className="px-4 pb-4">
                                    <p>Sales-specific content here...</p>
                                </div>
                            )}
                        </div>

                        {/* Accordion for Facturation */}
                        <div className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center py-4 text-left text-black bg-gray-300 px-4 font-semibold focus:outline-none"
                                onClick={() => handleToggle(3)}
                            >
                                <span>Facturation</span>
                                <span>{activeIndex === 3 ? <FaAngleDown /> : <FaAngleUp />}</span>
                            </button>
                            {activeIndex === 3 && (
                                <div className="px-4 pb-4">
                                    <p>Facturation-specific content here...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Index