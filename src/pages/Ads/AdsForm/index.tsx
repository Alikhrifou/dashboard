import { IoSaveOutline } from 'react-icons/io5'
import AdsPic from '../../../assets/imageSVG/adsPictur.svg'
import SharedSelect from '../../../components/sharedSelectInput/SharedSelect'

function index({ setDisplayAddAdsSection, displayAddAdsSection }: any) {
    return (<>
        <div>
            <p className='text-2xl font-normal text-[#00B074]'>Ads informations</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 mt-10'>
            <div className="flex">
                <img src={AdsPic} alt="" />
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 w-full">
                    <SharedSelect label='Source' width='24rem' />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Amount</label>
                    <input type='text' name="" id="" className='border w-96 rounded-xl px-3 py-1 h-14' />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Leads</label>
                    <input type='text' name="" id="" className='border w-96 rounded-xl px-3 py-1 h-14' />
                </div>
                <div className="flex flex-col gap-2">
                    <SharedSelect label='Product' width='24rem' />

                </div>

            </div>
            <div className="grid lg:grid-cols-2 gap-4">

                <div className="flex flex-col gap-2">
                    <SharedSelect label='Marketer' width='24rem' />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[#6B6B6B] text-sm'>Ads date</label>
                    <input type='date' name="" id="" className='border w-96 rounded-xl px-3 py-1 h-14' />
                </div>
            </div>
            <div className="grid">
                <label htmlFor="" className='text-[#6B6B6B] text-sm'>Note</label>
                <textarea name="" className='w-full rounded-lg border' rows={4} cols={95} id=""></textarea>
            </div>


        </div >
        <div className="absolute flex justify-between w-[96%] bg-white pb-5 mt-10">
            <button className='border border-black px-4 py-1 rounded-xl ' onClick={() => setDisplayAddAdsSection(!displayAddAdsSection)}>Cancel</button>
            <button className='flex justify-between items-center gap-4 border  px-4 py-2 rounded-xl bg-[#2D9CDB] text-white '><IoSaveOutline />save</button>
        </div >
    </>
    )
}

export default index