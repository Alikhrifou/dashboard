import { FiCalendar } from 'react-icons/fi'
import ImageFilter from '../../assets/imageSVG/filterBarImg.svg'
import ImageAdminDashboard from '../../assets/imageSVG/adminDashboardPic.svg'
import { useState } from 'react'
import { VscSettings } from 'react-icons/vsc'
import ToggleInput from '../../components/ToogleInput'
import DollarIcon from '../../assets/imageSVG/dollarIcon.svg'
import SharedSelect from '../sharedSelectInput/SharedSelect'

interface IIndex {
    title: string
    dashboard?: boolean
    teamFilter?: boolean
    deliveryFilter?: boolean
    ConfirmationFilter?: boolean
    PlateformFilter?: boolean
    DateFilter?: boolean
    AgentFilter?: boolean;
    dashboardAdminPic?: boolean
    confirmationLayout?: boolean
    deliveryLayout?: boolean
    analyticsLayout?: boolean
    productLayout?: boolean
    adminDashboardLayout?: boolean
}


function index({ title, confirmationLayout, deliveryLayout,adminDashboardLayout, analyticsLayout, productLayout, dashboard, teamFilter, deliveryFilter, ConfirmationFilter, PlateformFilter, DateFilter, AgentFilter, dashboardAdminPic = false }: IIndex) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedItem, setSelectedItem] = useState<number>(1)


    return (
        <main className='flex flex-col flex-wrap gap-4 bg-[#ffffff8e]'>
            {/* first part */}
            {dashboard && (<><div className='flex justify-start items-end gap-4'>
                {dashboardAdminPic ?
                    <img src={ImageAdminDashboard} alt="" />
                    :
                    <img src={ImageFilter} alt="" />

                }
                <div>
                    <h1 className='text-3xl font-bold text-[#464255]'>Dashboard</h1>
                    <p className='text-[#A3A3A3]'>Hi, Mehdi. Welcome back  to company name Admin!</p>
                </div>
            </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-3xl font-bold text-[#00B074]'>{title}</h1>
                    <div className="flex flex-wrap items-center gap-4 ">
                        <div>
                            <FiCalendar size={20} color='#00B074' className='bg-[#2D9CDB26] p-4 h-14 w-14 rounded-xl' />
                        </div>
                        <div className={`flex items-center gap-3 justify-center px-10 rounded-xl py-1 h-14 cursor-pointer ${selectedItem == 0 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E] bg-[#F4F4F4]'}`} onClick={() => setSelectedItem(0)}>
                            <FiCalendar size={15} color={`${selectedItem == 0 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E]'}`} />
                            <p>Today</p>
                        </div>
                        <div className={`flex items-center gap-3 justify-center px-10 rounded-xl py-1 h-14 cursor-pointer ${selectedItem == 1 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E] bg-[#F4F4F4]'}`} onClick={() => setSelectedItem(1)}>
                            <FiCalendar size={15} color={`${selectedItem == 0 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E]'}`} />
                            <p>Yesterday</p>
                        </div>
                        <div className={`flex items-center gap-3 justify-center px-10 rounded-xl py-1 h-14 cursor-pointer ${selectedItem == 2 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E] bg-[#F4F4F4]'}`} onClick={() => setSelectedItem(2)}>
                            <FiCalendar size={15} color={`${selectedItem == 0 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E]'}`} />
                            <p>Last 7 days</p>
                        </div>
                        <div className={`flex items-center gap-3 justify-center px-10 rounded-xl py-1 h-14 cursor-pointer ${selectedItem == 3 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E] bg-[#F4F4F4]'}`} onClick={() => setSelectedItem(3)}>
                            <FiCalendar size={15} color={`${selectedItem == 0 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E]'}`} />
                            <p>This month</p>
                        </div>
                        <div className={`flex items-center gap-3 justify-center px-10 rounded-xl py-1 h-14 cursor-pointer ${selectedItem == 4 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E] bg-[#F4F4F4]'}`} onClick={() => setSelectedItem(4)}>
                            <FiCalendar size={15} color={`${selectedItem == 0 ? 'bg-[#00B074] text-white' : 'text-[#3E3E3E]'}`} />
                            <p>Today: Aug 29</p>
                        </div>
                    </div>
                </div>
                <hr /></>)}


            {/* secondepart */}


            <div className={`${confirmationLayout ? 'grid lg:grid-cols-7' :
                deliveryLayout ? 'grid lg:grid-cols-6' :
                    analyticsLayout ? 'grid lg:grid-cols-6' : 
                    productLayout ? 'grid lg:grid-cols-5' :
                    adminDashboardLayout ? 'grid lg:grid-cols-4' :
                     ''} gap-5 items-center`}>
                <SharedSelect label="Product" />

                {ConfirmationFilter && (
                    <SharedSelect label="Confirmation" />

                )}
                {PlateformFilter && (
                    <SharedSelect label="Platforem" />
                )}
                {deliveryFilter && (
                    <SharedSelect label="Delivery" />
                )}
                {AgentFilter && (
                    <SharedSelect label="Agent" />
                )}


                {DateFilter && (<>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-xs'>Creation date</label>
                        <input type='date' name="" id="" className='border w-36 rounded-xl px-3 py-1 h-14' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-xs'>Updates date</label>
                        <input type='date' name="" id="" className='border w-36 rounded-xl px-3 py-1 h-14' />
                    </div>
                </>)}


                {!dashboardAdminPic &&
                    <SharedSelect label="Country" />

                }
                {teamFilter && (<SharedSelect label="Team" />)}
                <div className="flex items-center gap-4 justify-between">
                    <div>
                        <button className='flex gap-3 justify-center items-center bg-[#2D9CDB] h-14 px-4  rounded-xl text-white mt-6'>
                            <VscSettings />
                            <p>Filter</p>
                        </button>
                    </div>
                    {dashboard && (<>
                        <div className='mt-5 w-max'>
                        </div>
                        <div className='flex items-center justify-center gap-4 mt-6 w-max text-xs'>
                            <img src={DollarIcon} alt="" />
                            <ToggleInput />
                            <span className='w-[9rem]'>Convert to dollar</span>
                        </div></>)
                    }
                </div>

            </div>
        </main>)
}

export default index