
import { CiExport } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import ExportIcon from '../../assets/imageSVG/exportIcon.svg'
import SharedSelect from '../sharedSelectInput/SharedSelect'


function index({ displayAddShopForm, setDisplayAddShopForm }): any {



    return (
        <div className='flex flex-wrap gap-4'>
            <div className="flex flex-col gap-2">
            <SharedSelect label="Country" width='11rem'/>
               
            </div>
            <div className="flex flex-col gap-2">
            <SharedSelect label="City" width='11rem'/>
               
            </div>
        
         
            <div className='flex justify-start items-center mt-6'>
                <button className='flex items-center gap-4 text-white px-4 py-2 rounded-xl h-14 bg-[#2D9CDB]'>
                    <GiSettingsKnobs className='rotate-90' />Filter</button>
            </div>
            <div className="flex gap-4 w-[59%]">
                <div className="flex-1 flex items-center w-full mt-6 mx-2">
                    <input
                        type="text"
                        className="w-full border p-2 bg-white text-gray-700 rounded-xl h-14 outline-none"
                        placeholder="Search..."
                    />
                    <IoSearchOutline className='-ml-10' size={20} />
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-3 gap-2 bg-[#2D9CDB] h-14 py-2 rounded-xl text-white'
                        onClick={() => setDisplayAddShopForm(!displayAddShopForm)}>
                        <IoMdAddCircleOutline size={20}/>
                        <p>Add a new warehouse </p>
                    </button>
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-5 h-14 gap-4 bg-[#00B074] py-2 rounded-xl text-white'>
                    <img src={ExportIcon} />
                        <p>Export</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default index