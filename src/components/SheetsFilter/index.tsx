
import { CiExport } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import SharedSelect from '../sharedSelectInput/SharedSelect'

function index({ displayAddSheetForm, setDisplayAddSheetForm }): any {



    return (
        <div className='flex flex-wrap gap-4'>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-[#6B6B6B] text-sm'>Creation date </label>
                <input type='date' name="" id="" className='border w-44 rounded-xl px-3 py-1 h-14'/>
            </div>
            <div className="flex flex-col gap-2">
            <SharedSelect label="Marketer" width='11rem'/>
               
            </div>
             <div className="flex flex-col gap-2">
             <SharedSelect label="Auto fetch" width='11rem'/>
                
            </div>
        
         
            <div className='flex justify-start items-center mt-6'>
                <button className='flex items-center gap-4 text-white px-4 py-2 h-14 rounded-xl bg-[#2D9CDB]'>
                    <GiSettingsKnobs className='rotate-90' size={20} />Filter</button>
            </div>
            <div className="flex gap-4 w-[40%]">
                <div className="flex-1 flex items-center w-full mt-6 mx-2">
                    <input
                        type="text"
                        className="w-full border p-2 h-14 bg-white text-gray-700 rounded-md outline-none"
                        placeholder="Search..."
                    />
                    <IoSearchOutline className='-ml-10' color='#A4A4A4' size={25}/>
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-3 gap-2 bg-[#2D9CDB] py-2 h-14 rounded-xl text-white'
                        onClick={() => setDisplayAddSheetForm(!displayAddSheetForm)}>
                        <IoMdAddCircleOutline size={20} />
                        <p>Add sheet </p>
                    </button>
                </div>
               

            </div>
        </div>
    )
}

export default index