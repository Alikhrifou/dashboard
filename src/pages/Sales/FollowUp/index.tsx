import React from 'react'
import SalesFilter from '../../../components/SalesFilter/SalesFilter'
import SharedTable from '../../../components/SharedTable'
import EyeIcon from '../../../assets/imageSVG/eyeIcon.svg'
import EditeIcon from '../../../assets/imageSVG/editeIcon.svg'
import ActivityIcon from '../../../assets/imageSVG/activityIcon.svg'
import MsgIcon from '../../../assets/imageSVG/msgIcon.svg'

interface IOrder {
  ID: number;
  Country: string;
  Name: string;
  Phone: string;
  ProductSku: string;
  Qty: number;
  TotalPrice: string; 
  Confirmation: JSX.Element;
  Commentaire: string;
  CreatedAt: string;
  UpdatedAt: string;
  Msg: JSX.Element;
  Wtsp: JSX.Element;
  Actions?: React.ReactNode;
}


const orders :IOrder[]= [
  {
    ID: 1,
    Country: 'USA',
    Name: 'John Doe',
    Phone: '123-456-7890',
    ProductSku: 'ABC123',
    Qty: 5,
    TotalPrice: '$500',
    Confirmation: <p className='text-green-500 border rounded-lg p-2'>Confirmed</p>,
    Commentaire: 'Urgent delivery',
    CreatedAt: '23/09/08',
    UpdatedAt: '23/09/10',
    Msg: <p className='text-green-500'>Sent</p>,
    Wtsp: <p className='text-green-500'>Active</p>,
    Actions: '',
  },
  {
    ID: 2,
    Country: 'France',
    Name: 'Jane Smith',
    Phone: '987-654-3210',
    ProductSku: 'XYZ456',
    Qty: 3,
    TotalPrice: '€300',
    Confirmation: <p className='text-red-500 border rounded-lg p-2'>Cancelled</p>,
    Commentaire: 'Normal',
    CreatedAt: '23/09/05',
    UpdatedAt: '23/09/07',
    Msg: <p className='text-green-500'>Pending</p>,
    Wtsp: <p className='text-red-500'>Inactive</p>,
    Actions: '',
  },
];

const columns = [
  { header: 'ID', accessor: 'ID' as keyof typeof orders[0] },
  { header: 'Country', accessor: 'Country' as keyof typeof orders[0] },
  { header: 'Name', accessor: 'Name' as keyof typeof orders[0] },
  { header: 'Phone', accessor: 'Phone' as keyof typeof orders[0] },
  { header: 'Product/SKU', accessor: 'ProductSku' as keyof typeof orders[0] },
  { header: 'Qty', accessor: 'Qty' as keyof typeof orders[0] },
  { header: 'Total Price', accessor: 'TotalPrice' as keyof typeof orders[0] },
  { header: 'Confirmation', accessor: 'Confirmation' as keyof typeof orders[0] },
  { header: 'Commentaire', accessor: 'Commentaire' as keyof typeof orders[0] },
  { header: 'Created At', accessor: 'CreatedAt' as keyof typeof orders[0] },
  { header: 'Updated At', accessor: 'UpdatedAt' as keyof typeof orders[0] },
  { header: 'Msg', accessor: 'Msg' as keyof typeof orders[0] },
  { header: 'Wtsp', accessor: 'Wtsp' as keyof typeof orders[0] },
  {
    header: 'Actions',
    accessor: 'id',
    render: () => (
      <div className="flex justify-evenly items-center divide-x-2 border rounded-l-lg rounded-r-lg p-0">
      <button className=" text-white px-2 py-1"><img src={EyeIcon} className='w-4 h-4' /></button>
      <button className=" text-white px-1 py-1"><img src={ActivityIcon} className='w-4 h-4 ml-1' /></button>
      <button className=" text-white px-1 py-1"><img src={EditeIcon} className='w-4 h-4 ml-1' /></button>
      <button className=" text-white px-2 py-1"><img src={MsgIcon} className='w-4 h-4' /></button>

    </div>
    ),
  },
];

function index() {
  return (
    <div>
      <SalesFilter title='Total leads' ordersInfo={true} />
      <div className='my-6'>
        <SharedTable columns={columns} data={orders}/>
      </div>
    </div>
  )
}

export default index