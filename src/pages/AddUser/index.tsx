import { FiTrash2 } from 'react-icons/fi'
import AddPicture from '../../assets/pic.png'
import ToggleInput from '../../components/ToogleInput'


function index() {
    return (
        <div>
            <p className='text-[#00B074] font-bold text-2xl'>Add a new user</p>

            <div className="flex justify-center">
                <div className="flex flex-col justify-center gap-3 items-center">
                    <img src={AddPicture} alt="" className='w-32 h-32' />
                    <p className='text-[#464255]'>Profile Picture</p>
                    <span className='flex items-center gap-3 text-red-500'> <FiTrash2 color='red' />Delete </span>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-4 my-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>First Name</label>
                    <input type='text' name="" id="" className='px-3 h-12 rounded-xl border' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Last Name</label>
                    <input type='text' name="" id="" className='px-3 h-12 rounded-xl border' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Role</label>
                    <select name="" id="" className='px-3 h-12 rounded-xl border' >
                        <option value="">Manager</option>
                    </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 my-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Country</label>
                    <select name="" id="" className='px-3 h-12 rounded-xl border' >
                        <option value="">Morocco</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Phone number</label>
                    <input type='tel' name="" id="" className='px-3 h-12 rounded-xl border' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Email</label>
                    <input type='email' name="" id="" className='px-3 h-12 rounded-xl border' />
                </div>

            </div>

            <div className="grid lg:grid-cols-4 gap-4 my-4">

                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Password</label>
                    <input type='tel' name="" id="" className='px-3 h-12 rounded-xl border' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Confirm Password</label>
                    <input type='tel' name="" id="" className='px-3 h-12 rounded-xl border' />
                </div>


            </div>
            <div className='flex justify-start items-center gap-5'>
                <ToggleInput />
                <p className='text-sm text-[#1C1C1C]'>
                    Active
                </p>
            </div>
            <div className='flex justify-start gap-2 items-center font-bold my-6'>
                <p className='text-[#00B074]'>Commission </p>
                <hr className='w-full h-1 bg-[#00B074]' />
            </div>
            <div className="flex justify-start items-center gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Commission type</label>
                    <select name="" id="" className='px-3 h-12 rounded-xl border w-60' >
                        <option value="">Per lead</option>
                    </select>
                </div>  
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Number of leads</label>
                    <input type='number' name="" id="" className='px-3 h-12 rounded-xl border w-32'/> 
                </div> 
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Commission</label>
                 <input type='number' name="" id="" className='px-3 h-12 rounded-xl border w-32'/> 
                </div> 
               
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Unit</label>
                    <select name="" id="" className='px-3 h-12 rounded-xl border w-32' >
                        <option value="">%</option>
                    </select>
                </div>
            </div>
        </div>




    )
}

export default index