import { IoLink, IoSaveOutline } from 'react-icons/io5'
import AdsPic from '../../../assets/pic.png'
import { FiTrash2 } from 'react-icons/fi'
import ToggleInput from '../../../components/ToogleInput'
import SharedSelect from '../../../components/sharedSelectInput/SharedSelect';
interface Props {
    setDisplayAddShopForm: React.Dispatch<React.SetStateAction<boolean>>;
    displayAddShopForm: boolean;
}

function index({ setDisplayAddShopForm, displayAddShopForm }: Props) {
    return (<>
        <div>
            <p className='text-2xl text-[#00B074]'>Add a new shop</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 mt-10'>
            <div className="flex flex-col items-center gap-4">
                <img src={AdsPic} alt="" className='w-24 h-24' />
                <p>Shop logo</p>
                <div className='flex gap-3 items-center text-red-500'>
                    <FiTrash2 color='red' />Delete
                </div>
            </div>

            <div className="container p-4 w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className='text-[#6B6B6B] text-sm'>Shop name</label>
                            <input name="" id="" className='border min-auto rounded-xl px-3 py-1 h-14' />
                        </div>
                    </div>
                    <div>
                        <SharedSelect label='Manager' width='' />

                    </div>
                </div>

                <div className="mt-4">
                    <div className="relative rounded-xl ">
                        <label htmlFor="" className='text-[#6B6B6B] text-sm mb-3'>Store link</label>
                        <input
                            type="url"
                            className=" border p-2 bg-white text-gray-700 h-14 rounded-xl outline-none w-full"
                            placeholder="Search..."
                        />
                        <span className="absolute inset-y-0 end-0 grid w-10 mt-5 pr-5 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Search</span>
                                <IoLink />
                            </button>
                        </span>


                    </div>
                </div>
                <div className="flex justify-start gap-4 items-center my-6 ">
                    <div className='flex items-center gap-4'>
                        <ToggleInput />
                        <p className='text-sm'>Active</p>
                    </div>
                </div>
            </div>




        </div>

        <div className="absolute bottom-0 bg-white w-[96%] px-5 mt-5">
            <div className="flex justify-between my-5">
                <button className='border border-black px-4 py-1 rounded-xl ' onClick={() => setDisplayAddShopForm(!displayAddShopForm)}>Cancel</button>
                <button className='flex justify-between items-center gap-4 border  px-4 py-2 rounded-xl bg-[#2D9CDB] text-white ml-10'><IoSaveOutline />save</button>
            </div >
        </div>
    </>
    )
}

export default index