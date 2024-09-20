
import { CiExport } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoSearchOutline } from 'react-icons/io5'
import SharedSelect from '../sharedSelectInput/SharedSelect'
import ExportIcon from '../../assets/imageSVG/exportIcon.svg'

function index() {



    return (
        <div className='flex gap-4'>
            <div className="flex justify-between items-center gap-3">
                <div>

                    <SharedSelect label="Produit" width='11rem'/>
                </div>
                <div className="flex flex-col flex-wrap gap-2">

                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Creation date </label>
                    <input type='date' name="" id="" className='border w-40 rounded-xl px-3 py-1 h-14' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Updates date </label>
                    <input type='date' name="" id="" className='border w-40 rounded-xl px-3 py-1 h-14' />
                </div>
                <div>

                    <SharedSelect label="Country" width='11rem'/>
                </div>
                <div className='flex justify-start items-center mt-6'>
                    <button className='flex items-center gap-4 text-white px-4 rounded-xl h-14 bg-[#2D9CDB]'>
                        <GiSettingsKnobs className='rotate-90' />Filter</button>
                </div>
            </div>
            <div className="flex items-center w-96">
                <div className="flex-1 flex items-center w-full mt-6 mx-2">
                    <input
                        type="text"
                        className="w-full border p-2 h-14 bg-white text-gray-700 rounded-md outline-none"
                        placeholder="Search..."
                    />
                    <IoSearchOutline className='-ml-10' color='#A4A4A4' size={25} />
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-6 gap-4 h-14 bg-[#00B074] py-2 rounded-xl text-white'>
                        <img src={ExportIcon} />
                        <p>Export</p>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default index