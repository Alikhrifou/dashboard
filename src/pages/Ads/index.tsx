import React, { useState } from 'react'
import SharedTable from '../../components/SharedTable'
import AdsFilter from '../../components/AdsFilter'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'
import EditeIcon from '../../assets/imageSVG/editeIcon.svg'
import FbIcon from '../../assets/imageSVG/fbIcon.svg'
import InstaIcon from '../../assets/imageSVG/instagramIcon.svg'

import AdsForm from './AdsForm'
interface IAds {
    ID: number;
    CreatedDate: string;
    AdsFor: string;
    Marketer: string;
    Source: JSX.Element;
    Amount: number;
    Leads: number;
    Product: JSX.Element;
    Actions: JSX.Element;
}

const adsData: IAds[] = [
    {
        ID: 1,
        CreatedDate: '2024-09-09',
        AdsFor: 'Product Launch',
        Marketer: 'John Doe',
        Source: (
            <div className="flex items-center gap-3">
                <img src={FbIcon} className='w-6 h-6'/>
                <span>Facebook</span>
            </div>
        ),
        Amount: 1500,
        Leads: 120,
        Product: <p className='underline'>New Product</p>,
        Actions: (
            <></>
        ),
    },
    {
        ID: 2,
        CreatedDate: '2024-09-08',
        AdsFor: 'Seasonal Sale',
        Marketer: 'Jane Smith',
        Source: (
            <div className="flex items-center gap-3">
                <img src={InstaIcon}  className='w-6 h-6'/>
                <span>Instagram</span>
            </div>
        ),
        Amount: 1000,
        Leads: 95,
        Product: <p className='underline'>Fashion Accessories</p>,
        Actions: (
            <></>
        ),
    },
];
const adsColumns = [
    { header: 'ID', accessor: 'ID' as keyof IAds },
    { header: 'Created Date', accessor: 'CreatedDate' as keyof IAds },
    { header: 'Ads For', accessor: 'AdsFor' as keyof IAds },
    { header: 'Marketer', accessor: 'Marketer' as keyof IAds },
    {
        header: 'Source',
        accessor: 'Source' as keyof IAds,
        render: (source: JSX.Element) => source
    },
    { header: 'Amount', accessor: 'Amount' as keyof IAds },
    { header: 'Leads', accessor: 'Leads' as keyof IAds },
    { header: 'Product', accessor: 'Product' as keyof IAds },
    {
        header: 'Actions',
        accessor: 'Actions' as keyof IAds,
        render: () => (
            <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">
                <button
                    className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Edit Product"
                >
                    <img src={EditeIcon} className='w-4 h-4 px-0' />
                </button>

                <button
                    className="inline-block px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                >
                  <img src={DeleteIcon} className='w-4 h-4' />
                </button>
            </span>
           
        )
    }
];

function Index() {

    const [displayAddAdsSection, setDisplayAddAdsSection] = useState<boolean | null>(false)


    return (<>
        {displayAddAdsSection ? <AdsForm setDisplayAddAdsSection={setDisplayAddAdsSection} displayAddAdsSection={displayAddAdsSection} /> : (<>
            <div className="flex my-3">
                <h1 className='text-[#00B074] text-2xl'>Ads</h1>
            </div>
            <div className="flex my-4">
                <AdsFilter setDisplayAddAdsSection={setDisplayAddAdsSection} displayAddAdsSection={displayAddAdsSection} />
            </div>
            <div>
                <SharedTable columns={adsColumns} data={adsData} />
            </div></>)}
    </>)
}

export default Index