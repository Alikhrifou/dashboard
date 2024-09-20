import React from 'react'
import { GiSandsOfTime, GiSettingsKnobs } from 'react-icons/gi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import SharedSelect from '../sharedSelectInput/SharedSelect';
interface ISalesFilter {
    title: string;
    fbLeadsInfo?: boolean;
    ordersInfo?: boolean;
    sellInfo?: boolean;
}


function SalesFilter({ title, fbLeadsInfo, ordersInfo, sellInfo }: ISalesFilter) {
    return (
        <div className='flex flex-col gap-5'>
            <div className="flex justify-between w-full">


                <div>
                    <p className='text-[#00B074] text-2xl '>{title}</p>
                    {fbLeadsInfo && <div className='flex items-center justify-between gap-6 rounded-lg px-4 py-5 bg-[#97B00026] my-2'>
                        <div className='flex flex-col'>
                            <span>Number of leads not yet confirmed</span>
                            <h1 className='text-2xl'>156</h1>
                        </div>
                        <div>
                            <GiSandsOfTime className='p-2 rounded-full bg-[#FFFFFF]' color='#9AB113' size={35} />
                        </div>
                    </div>}
                </div>

                <div className='flex items-center gap-10'>
                    <div className="relative">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            className="w-full border rounded-md border-gray-200 py-2.5 pe-10 px-3 h-14 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button type="button" className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Search</span>
                                <IoSearchOutline color='#A4A4A4' size={25} />
                            </button>
                        </span>
                    </div>

                    <div>
                        <button className='flex items-center gap-4 text-white px-4 py-2 h-14 rounded-xl bg-[#2D9CDB]'><IoMdAddCircleOutline />Create</button>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                <SharedSelect  label="Country" />
                <SharedSelect label="Date type" />
                <SharedSelect label="Product" />
                <SharedSelect label="Confirmation" />
                <SharedSelect label="Msg/Wtsp status" />
                <SharedSelect label="Sort" />
            </div>
            <div className={`${ordersInfo ? 'grid grid-cols-7 gap-6' : 'grid grid-cols-6 gap-12'}`}>
            <SharedSelect label="Confirmation agent" />
            <SharedSelect label="Seller" />
               
                {sellInfo && (<>
                    <SharedSelect label="UP selle" />
                    <SharedSelect label="Cross-selle" />
                </>)}


                {ordersInfo && (<>
                    <SharedSelect label="Delivery" />
                    <SharedSelect label="Affectation" />

                </>)}

                <div className='flex justify-start items-center mt-5'>
                    <button className='flex items-center gap-4 text-white px-4 py-2 h-14 rounded-xl bg-[#2D9CDB]'><GiSettingsKnobs className='rotate-90' />Filter</button>
                </div>
            </div>
        </div>
    )
}

export default SalesFilter