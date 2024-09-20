import { FaAngleDown } from 'react-icons/fa'
import SharedStatisticCard from '../../../components/StatisticsCard'
import { IoSearchOutline } from 'react-icons/io5'
import { LuAlertTriangle } from 'react-icons/lu'
import FollowUpFilter from '../../../components/FollowUpFilter'
import SharedTable from '../../../components/SharedTable/index';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import ToggleInput from '../../../components/ToogleInput'
import EyeIcon from '../../../assets/imageSVG/eyeIcon.svg'
import EditeIcon from '../../../assets/imageSVG/editeIcon.svg'
import ActivityIcon from '../../../assets/imageSVG/activityIcon.svg'
import MsgIcon from '../../../assets/imageSVG/msgIcon.svg'
import AlertIcon from '../../../assets/imageSVG/alertIcon.svg'

interface DataOrder {
  ID: JSX.Element;
  SPID: number;
  Name: string;
  Phone: number;
  ProductSKU: number;
  Delivery: string,
  Confirmation: JSX.Element;
  Comment: string;
  DroppedAt: string;
  UpdatedAt: string;
  Msg: JSX.Element;
  Wtsp: JSX.Element;
  actions: JSX.Element;
}


const columnsOrder = [
  { header: 'ID', accessor: 'ID' as keyof DataOrder},
  { header: 'SP ID', accessor: 'SPID' as keyof DataOrder },
  { header: 'Name', accessor: 'Name' as keyof DataOrder },
  { header: 'Phone', accessor: 'Phone' as keyof DataOrder },
  { header: 'Product/SKU', accessor: 'ProductSKU' as keyof DataOrder },
  { header: 'Delivery', accessor: 'Delivery' as keyof DataOrder },
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
      <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">
        <button
          className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Edit Product"
        >
          <img src={EyeIcon} className='w-6 h-6 px-0' />
        </button>
        <button
          className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Edit Product"
        >
          <img src={ActivityIcon} className='w-6 h-6 px-0' />
        </button> <button
          className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Edit Product"
        >
          <img src={EditeIcon} className='w-6 h-6 px-0' />
        </button>

        <button
          className="inline-block px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
          title="Delete Product"
        >
          <img src={MsgIcon} className='w-6 h-6' />
        </button>
      </span>
    ),
  },
];

// Sample data for your table
const orders: DataOrder[] = [
  {
    ID: <b className='text-black'>#21</b>,
    SPID: 1001,
    Name: 'John Doe',
    Phone: 1234567890,
    ProductSKU: 56,
    Delivery: '-',
    Confirmation: <span className="text-green-500 border rounded-lg px-4 py-2 border-green-500">Confirmed</span>,
    Comment: 'Order completed successfully.',
    DroppedAt: '2023-09-12',
    UpdatedAt: '2023-09-14',
    Msg: <ToggleInput />,
    Wtsp: <ToggleInput />,
    actions: (
      <></>
    ),
  },
  {
    ID: <b className='text-black'>#22</b>,
    SPID: 1002,
    Name: 'Jane Smith',
    Phone: 9876543210,
    ProductSKU: 12,
    Delivery: '-',
    Confirmation: <span className="text-red-500 border rounded-lg px-4 py-2 border-red-500">Cancelled</span>,
    Comment: 'Order canceled due ..',
    DroppedAt: '2023-09-11',
    UpdatedAt: '2023-09-12',
    Msg: <ToggleInput />,
    Wtsp: <ToggleInput />,
    actions: (
     <></>
    ),
  },
];
function Index() {
  return (<>
    <div className='flex justify-between items-center w-full'>

      <div>
        <SharedStatisticCard title='Number of orders with problem'
          bgColor='#EF382626'
          total={167}
          icon={AlertIcon} />
      </div>
      <div className='flex justify-center items-center gap-8 mr-10'>
        <div className="relative w-[100%]">
          <input
            type="text"
            className=" border p-2 bg-white h-14 text-gray-700 rounded-md outline-none w-full"
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
          <button className='flex justify-center items-center gap-4 h-14 bg-[#00B074] text-white px-6 py-2 rounded-xl'>
            <FaAngleDown /> Drop
          </button>
        </div>
      </div>
    </div>
    <div>
      <FollowUpFilter />
    </div>

    <section className='mt-5'>
      <SharedTable columns={columnsOrder} data={orders} />
    </section>
  </>
  )
}

export default Index