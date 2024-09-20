
import { CiExport } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import ExportIcon from '../../assets/imageSVG/exportIcon.svg'
import SharedSelect from '../sharedSelectInput/SharedSelect'

function index({ displayAddShopForm, setDisplayAddShopForm }): any {



    return (
        <div className='flex gap-4'>
            <div className="flex flex-col gap-2">
            <SharedSelect label="Manager" width='11rem'/>
               
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-[#6B6B6B] text-sm'>Creation date </label>
                <input type='date' name="" id="" className='border w-40 rounded-lg px-3 py-1 h-14' />
            </div>


            <div className="flex flex-col gap-2">
            <SharedSelect label="Status" width='11rem'/>
               
            </div>
            <div className='flex justify-start items-center mt-6'>
                <button className='flex items-center gap-4 text-white px-4 py-2 rounded-xl h-14 bg-[#2D9CDB]'>
                    <GiSettingsKnobs className='rotate-90' size={20}/>Filter</button>
            </div>
            <div className="flex gap-4 w-full">
                <div className="flex-1 flex items-center w-full mt-6 mx-2">
                    <input
                        type="text"
                        className="w-full border h-14 p-2 bg-white text-gray-700 rounded-xl outline-none"
                        placeholder="Search..."
                    />
                    <IoSearchOutline className='-ml-10' color='#A4A4A4' size={25}/>
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-3 h-14 gap-2 bg-[#2D9CDB] py-2 rounded-xl text-white'
                        onClick={() => setDisplayAddShopForm(!displayAddShopForm)}>
                        <IoMdAddCircleOutline  size={20}/>
                        <p>Add a new shop </p>
                    </button>
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-5 gap-4 h-14 bg-[#00B074] py-2 rounded-xl text-white'>
                        <img src={ExportIcon} />
                        <p>Export</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default index