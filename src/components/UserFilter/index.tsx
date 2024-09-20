/* eslint-disable @typescript-eslint/no-explicit-any */

import { CiExport } from 'react-icons/ci'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import ExportIcon from '../../assets/imageSVG/exportIcon.svg'

function Index({setDisplayAddUserForm,displayAddUserForm}:any) {
    return (
        
                <div className="flex gap-4 w-[60%]">
                    <div className="flex-1 flex items-center w-full mt-6 mx-2">
                        <input
                            type="text"
                            className="w-full border p-2 h-14 bg-white text-gray-700 rounded-md outline-none"
                            placeholder="Search..."
                        />
                        <IoSearchOutline className='-ml-10' color='#A4A4A4' size={25}/>
                    </div>
                    <div className='mt-6'>
                        <button className='flex items-center px-3 gap-2 bg-[#2D9CDB] h-14 py-2 rounded-xl text-white'
                            onClick={() => setDisplayAddUserForm(!displayAddUserForm)}>
                            <IoMdAddCircleOutline size={20}/>
                            <p>Add a new user </p>
                        </button>
                    </div>
                    <div className='mt-6'>
                        <button className='flex items-center px-5 h-14 gap-4 bg-[#00B074] py-2 rounded-xl text-white'>
                        <img src={ExportIcon} />
                            <p>Export</p>
                        </button>
                    </div>

                </div>
       
    )
}

export default Index