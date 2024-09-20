import {  IoSaveOutline } from 'react-icons/io5'
import SheetPic from '../../../assets/imageSVG/sheetIcon.svg'
import ToggleInput from '../../../components/ToogleInput'
interface Props {
    setDisplayAddSheetForm: React.Dispatch<React.SetStateAction<boolean>>;
    displayAddSheetForm: boolean;
  }
  
function index({ setDisplayAddSheetForm, displayAddSheetForm }: Props) {
    return (<>
        <div>
            <p className='text-2xl text-[#00B074]'>Add a new sheet</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
            <div className="flex flex-col items-center gap-4 mt-16">
                <img src={SheetPic} alt="" />

            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Name</label>
                    <input name="" id="" className='border border-gray-500 min-w-96 rounded-lg px-3 py-1 h-14' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Sheet Name</label>
                    <input name="" id="" className='border border-gray-500 min-w-96 rounded-lg px-3 py-1 h-14' />

                </div>
            </div>


            <div className="relative min-w-[63%]">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Sheet Id</label>
                    <input name="" id="" className='border border-gray-500 min-w-96 rounded-lg px-3 py-1 h-14' />

                </div>

            </div>
            <div className="flex justify-start gap-4 items-center my-6 ">
                <div className='flex items-center gap-4'>
                    <ToggleInput />
                    <p className='text-sm'>Auto fetch</p>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 bg-white w-[98%] my-5 px-5">
            <div className="flex justify-between my-5 mx-10">
                <button className='border border-black px-4 py-1 rounded-xl ' onClick={() => setDisplayAddSheetForm(!displayAddSheetForm)}>Cancel</button>
                <button className='flex justify-between items-center gap-4 border  px-3 py-2 rounded-xl bg-[#2D9CDB] text-white ml-10'><IoSaveOutline />save</button>
            </div >
        </div>
    </>
    )
}

export default index