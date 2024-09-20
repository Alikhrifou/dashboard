
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import SharedSelect from '../sharedSelectInput/SharedSelect'
import ExportIcon from '../../assets/imageSVG/exportIcon.svg'

function index({ setDisplayAddAdsSection, displayAddAdsSection }: any) {



    return (
        <div className='flex gap-4'>
            <div className="grid lg:grid-cols-5 gap-3">

                <SharedSelect label='Manager' />


                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-xs text-gray-700'>Creation date </label>
                    <input type='date' name="" id="" className='border w-40 rounded-xl px-3 py-1 h-14' />
                </div>
                <SharedSelect label='Markter' />
                <SharedSelect label='Source' />

                <div className='flex justify-start items-center mt-5'>
                    <button className='flex items-center gap-4 text-white px-4 py-2 h-14 rounded-xl bg-[#2D9CDB]'><GiSettingsKnobs className='rotate-90' />Filter</button>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1 flex items-center w-full mt-6 mx-2">
                    <input
                        type="text"
                        className="w-full border p-2 bg-white text-gray-700 rounded-xl outline-none h-14"
                        placeholder="Search..."
                    />
                    <IoSearchOutline className='-ml-10' color='#A4A4A4' size={25} />
                </div>
                <div className='mt-6'>
                    <button className='flex items-center px-4 gap-1 bg-[#2D9CDB] py-2 h-14 rounded-xl text-white' onClick={() => setDisplayAddAdsSection(!displayAddAdsSection)}>
                        <IoMdAddCircleOutline size={23} />
                        <p>Create a new Add</p>
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