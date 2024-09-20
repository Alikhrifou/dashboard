import { IoSaveOutline } from 'react-icons/io5'
import AdsPic from '../../../../assets/pic.png'
import { FiTrash2 } from 'react-icons/fi'
import ToggleInput from '../../../../components/ToogleInput'
import SharedSelect from '../../../../components/sharedSelectInput/SharedSelect'

function index({ setDisplayAddUserForm, displayAddUserForm }: any) {
    return (<>
        <div>
            <p className='text-2xl text-[#00B074]'>Add a new shop</p>
        </div>
        <div className='flex flex-col justify-start  gap-6 mt-10'>
            <div className="flex flex-col items-center gap-4">
                <img src={AdsPic} alt="" className='w-24 h-24' />
                <p>Profile picture</p>
                <div className='flex gap-3 items-center text-red-500'>
                    <FiTrash2 color='red' />Delete
                </div>
            </div>
            <div className="flex gap-4 justify-start pl-36 items-start">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-[#6B6B6B] text-sm'>First name</label>
                        <input name="" id="" className='border  rounded-lg px-3 py-1 h-14' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <SharedSelect label='Country' />

                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>password</label>
                        <input type="password" name="" id="" className='border  rounded-lg px-3 py-1 h-14' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <ToggleInput />
                        <p className='text-sm'>Active</p>
                    </div>



                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-sm text-[#6B6B6B]'>Last name</label>
                        <input name="" id="" className='border  rounded-lg px-3 py-1 h-14' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>Phone number</label>
                        <input name="" id="" className='border  rounded-lg px-3 py-1 h-14' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>Confirm password</label>
                        <input type="password" name="" id="" className='border  rounded-lg px-3 py-1 h-14' />
                    </div>


                </div>
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col gap-2">
                        <SharedSelect label='Role' />

                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-xs text-[#6B6B6B]'>Email</label>
                        <input name="" id="" className='border  rounded-lg px-3 py-1 h-14' />
                    </div>
                </div>
            </div>


        </div>

        <div className='flex justify-start gap-2 items-center font-bold my-6 ml-36'>
            <p className='text-[#00B074] font-thin'>Commission </p>
            <hr className='w-full h-[0.15rem] bg-[#00B074]' />
        </div>
        <div className="flex justify-start ml-36 gap-5 items-center">
            <div className="flex flex-col gap-2">
                <SharedSelect label='Commission type' width='25rem' />

            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-xs text-[#6B6B6B]'>Number of leads</label>
                <input type="text" name="" id="" className='border w-36 rounded-lg px-3 py-1 h-14' />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="" className='text-xs text-[#6B6B6B]'>Commission</label>
                <input type="text" name="" id="" className='border w-36 rounded-lg px-3 py-1 h-14' />
            </div>
            <div className="flex flex-col gap-2">
                <SharedSelect label='Unit' width='10rem' />

            </div>
        </div>
        <div className="absolute bg-white w-[98%] mt-5 py-3 px-5">
            <div className="flex justify-between">
                <button className='border border-black px-4 py-1 rounded-xl ' onClick={() => setDisplayAddUserForm(!displayAddUserForm)}>Cancel</button>
                <button className='flex justify-between items-center gap-4 border  px-4 py-2 rounded-xl bg-[#2D9CDB] text-white ml-10'><IoSaveOutline />save</button>
            </div >
        </div>
    </>
    )
}

export default index