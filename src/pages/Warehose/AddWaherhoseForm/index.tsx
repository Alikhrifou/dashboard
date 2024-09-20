/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoSaveOutline } from 'react-icons/io5'
import HouseLogo from '../../../assets/imageSVG/waherHouseIcon.svg'
import SharedSelect from '../../../components/sharedSelectInput/SharedSelect'

function index({ displayAddWaherhoseForm, setDisplayAddWaherhoseForm }: any) {
    return (<>
        <div>
            <p className='text-2xl font-normal text-[#00B074]'>Add a new warehouse</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 mt-10'>
            <div className="flex flex-col items-center gap-4">
                <img src={HouseLogo} alt="" />
                   
            </div>
            <div className="grid gap-4 min-w-[63%]">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Warehouse name</label>
                    <input name="" id="" className='border min-w-96 rounded-xl px-3 py-1 h-14' />
                </div>
                <div className="flex flex-col gap-2">
                <SharedSelect label='Country' width=''/>
                   
                </div>
                 <div className="flex flex-col gap-2">
                 <SharedSelect label='City' width=''/>
                  
                </div>
            </div>


        </div>
       
        <div className="absolute bottom-0  bg-white w-[97%] mt-5">
            <div className="flex justify-between  px-8 py-2">

            <button className='border border-black px-4 py-1 rounded-lg ' onClick={() => setDisplayAddWaherhoseForm(!displayAddWaherhoseForm)}>Cancel</button>
            <button className='flex justify-between items-center gap-4 border  px-4 py-2 rounded-lg bg-[#2D9CDB] text-white '><IoSaveOutline />save</button>
            </div>
        </div>
    </>
    )
}

export default index