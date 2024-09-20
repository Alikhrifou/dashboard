import { IoSearchOutline } from 'react-icons/io5'
import ExportIcon from '../../../assets/imageSVG/exportIcon.svg'
import FollowUpFilter from '../../../components/FollowUpFilter'
import SharedTable from '../../../components/SharedTable/index';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import ToggleInput from '../../../components/ToogleInput'
import { BsChatText } from 'react-icons/bs'


interface DataOrder {
    ID: number;
    SPID: number;
    Name: string;
    Phone: number;
    ProductSKU: number;
    Confirmation: JSX.Element;
    Comment: string;
    DroppedAt: string;
    UpdatedAt: string;
    Msg: JSX.Element;
    Wtsp: JSX.Element;
    actions: JSX.Element;
}


const columnsOrder = [
    { header: 'ID', accessor: 'ID' as keyof DataOrder },
    { header: 'SP ID', accessor: 'SPID' as keyof DataOrder },
    { header: 'Name', accessor: 'Name' as keyof DataOrder },
    { header: 'Phone', accessor: 'Phone' as keyof DataOrder },
    { header: 'Product/SKU', accessor: 'ProductSKU' as keyof DataOrder },
    { header: 'Confirmation', accessor: 'Confirmation' as keyof DataOrder },
    { header: 'Comment', accessor: 'Comment' as keyof DataOrder },
    { header: 'Dropped at', accessor: 'DroppedAt' as keyof DataOrder },
    { header: 'Updated at', accessor: 'UpdatedAt' as keyof DataOrder },
    { header: 'Msg', accessor: 'Msg' as keyof DataOrder },
    { header: 'Wtsp', accessor: 'Wtsp' as keyof DataOrder },
    {
        header: 'Actions',
        accessor: 'actions',
        render: () => (
            <div className="flex">
                <button className="px-3 py-1 text-white bg-gray-100 border rounded-l">
                    <FiEye color="#646565" />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border ">
                    <FiEdit color="#646565" />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border">
                    <FiTrash2 color="#646565" />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border rounded-r">
                    <BsChatText color="#646565" />
                </button>
            </div>
        ),
    },
];

// Sample data for your table
const orders: DataOrder[] = [
    {
        ID: 1,
        SPID: 1001,
        Name: 'John Doe',
        Phone: 1234567890,
        ProductSKU: 567890,
        Confirmation: <span className="text-green-500 border rounded-lg px-4 py-2 border-green-500">Confirmed</span>,
        Comment: 'Order completed successfully.',
        DroppedAt: '2023-09-12',
        UpdatedAt: '2023-09-14',
        Msg: <ToggleInput />,
        Wtsp: <ToggleInput />,
        actions: (
            <div className="flex gap-2">
                <button className="px-3 py-1 text-white bg-gray-100 border rounded">
                    <FiEye />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border rounded">
                    <FiEdit />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border rounded">
                    <FiTrash2 />
                </button>
            </div>
        ),
    },
    {
        ID: 2,
        SPID: 1002,
        Name: 'Jane Smith',
        Phone: 9876543210,
        ProductSKU: 123456,
        Confirmation: <span className="text-red-500 border rounded-lg px-4 py-2 border-red-500">Cancelled</span>,
        Comment: 'Order canceled due to stock issues.',
        DroppedAt: '2023-09-11',
        UpdatedAt: '2023-09-12',
        Msg: <ToggleInput />,
        Wtsp: <ToggleInput />,
        actions: (
            <div className="flex gap-2">
                <button className="px-3 py-1 text-white bg-gray-100 border rounded">
                    <FiEye />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border rounded">
                    <FiEdit />
                </button>
                <button className="px-3 py-1 text-white bg-gray-100 border rounded">
                    <FiTrash2 />
                </button>
            </div>
        ),
    },
];
function Index() {
    return (<>
        <div className='flex justify-between items-center '>

            <div className='w-full'>
                <FollowUpFilter />
            </div>
            <div className='flex justify-center items-center gap-8 mr-1 mt-10'>
                <div className="relative w-[100%]">
                    <input
                        type="text"
                        className=" border p-2 bg-white h-14 text-gray-700 rounded-md outline-none"
                        placeholder="Search..."
                    />
                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <IoSearchOutline />
                        </button>
                    </span>
                </div>
                <div>
                    <button className='flex justify-center items-center gap-4 bg-[#00B074] text-white px-6 py-2 h-14 rounded-xl'>
                        <img src={ExportIcon} /> Export
                    </button>
                </div>
            </div>
        </div>
        <div>
        </div>

        <section className='mt-5'>
            <SharedTable columns={columnsOrder} data={orders} />
        </section>
    </>
    )
}

export default Index