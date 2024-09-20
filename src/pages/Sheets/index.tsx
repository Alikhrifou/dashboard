import { IoIosCopy } from 'react-icons/io'
import SheetIcon from '../../assets/imageSVG/sheetIcon.svg'
import SheetsFilter from '../../components/SheetsFilter'
import { useState } from 'react'
import SharedTable from '../../components/SharedTable'
import AddSheetForm from './AddSheetForm'
import EditeIcon from '../../assets/imageSVG/editeIcon.svg'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'

interface ITableRow {
    ID: number;
    Name: string;
    SheetName: string;
    AutoFetch: boolean;
    Created: string;
    Actions: JSX.Element;
}

const tableData: ITableRow[] = [
    {
        ID: 1,
        Name: 'Monthly Report',
        SheetName: 'Finance Report',
        AutoFetch: true,
        Created: '2024-09-01',
        Actions: (
            <></>
        ),
    },
    {
        ID: 2,
        Name: 'Customer Data',
        SheetName: 'Client Info',
        AutoFetch: false,
        Created: '2024-08-15',
        Actions: (
            <></>
        ),
    },
    {
        ID: 3,
        Name: 'Inventory Overview',
        SheetName: 'Stock Check',
        AutoFetch: true,
        Created: '2024-07-30',
        Actions: (
            <></>
        ),
    },
    {
        ID: 4,
        Name: 'Marketing Analytics',
        SheetName: 'Ads Performance',
        AutoFetch: false,
        Created: '2024-07-05',
        Actions: (
            <></>
        ),
    },
];
const columns = [
    { header: 'ID', accessor: 'ID' as keyof ITableRow },
    { header: 'Name', accessor: 'Name' as keyof ITableRow },
    { header: 'Sheet Name', accessor: 'SheetName' as keyof ITableRow },
    {
        header: 'AutoFetch', accessor: 'AutoFetch' as keyof ITableRow,
        render: (value: boolean) => (value ? 'Enabled' : 'Disabled')
    },
    { header: 'Created', accessor: 'Created' as keyof ITableRow },
    {
        header: 'Actions', accessor: 'Actions' as keyof ITableRow,
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
        ),
    },
];


function Index() {


    const [displayAddSheetForm, setDisplayAddSheetForm] = useState<boolean>(false)



    return (<>
        {!displayAddSheetForm ? <AddSheetForm displayAddSheetForm={displayAddSheetForm} setDisplayAddSheetForm={setDisplayAddSheetForm} /> :
            (<div>
                <p className='font-normal mb-5 text-2xl text-[#00B074]'>Google sheets</p>
                <span className='text-[#A3A3A3] font-thin'>Use this email to give access to Google Sheets</span>


                <div className="flex gap-5 my-6">
                    <img src={SheetIcon} alt="" />
                    <div className="flex flex-col gap-2">
                        <h1 className='text-2xl'>Application’s email</h1>
                        <div className="flex items-center">
                            <input type="text" className='bg-gray-200 w-[30rem] h-14 py-2 rounded-lg text-sm pl-4 pr-10' value="New-service-account@testing-38756435.testaccount.com" />
                            <IoIosCopy className='-ml-6' />
                        </div>
                        <span className='text-[#A3A3A3] font-thin'>Use this email to give access to Google Sheets</span>
                    </div>
                </div>

                <div>
                    <SheetsFilter displayAddSheetForm={displayAddSheetForm} setDisplayAddSheetForm={setDisplayAddSheetForm} />
                </div>

                <section className='my-4'>
                    <SharedTable columns={columns} data={tableData} />
                </section>

            </div>)}
    </>)
}

export default Index