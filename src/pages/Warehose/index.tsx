import { useState } from 'react'
import AddWaherhoseForm from './AddWaherhoseForm'
import WarehoseFilter from '../../components/WarehoseFilter';
import SharedTable from '../../components/SharedTable';

import EditeIcon from '../../assets/imageSVG/editeIcon.svg'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'

interface IWarehouse {
    warehouseName: string;
    country: string;
    city: string;
    actions: JSX.Element;
}
const warehouses: IWarehouse[] = [
    {
        warehouseName: 'Warehouse 1',
        country: 'USA',
        city: 'New York',
        actions: (
            <div className="flex gap-2">
                <button className="text-green-500">Edit</button>
                <button className="text-red-500">Delete</button>
            </div>
        )
    },
    {
        warehouseName: 'Warehouse 2',
        country: 'Germany',
        city: 'Berlin',
        actions: (
            <div className="flex gap-2">
                <button className="text-green-500">Edit</button>
                <button className="text-red-500">Delete</button>
            </div>
        )
    },
    {
        warehouseName: 'Warehouse 3',
        country: 'Canada',
        city: 'Toronto',
        actions: (
            <div className="flex gap-2">
                <button className="text-green-500">Edit</button>
                <button className="text-red-500">Delete</button>
            </div>
        )
    }
];
const columns = [
    { header: 'Warehouse Name', accessor: 'warehouseName' as keyof IWarehouse },
    { header: 'Country', accessor: 'country' as keyof IWarehouse },
    // { header: '', accessor: '' as keyof IWarehouse },
    { header: 'City', accessor: 'city' as keyof IWarehouse },
    {
        header: 'Actions',
        accessor: 'actions' as keyof IWarehouse,
        render: () => (
            <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm ml-10">
            
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

    const [displayAddWaherhoseForm, setDisplayAddWaherhoseForm] = useState<boolean>(false)

    return (<>
        {displayAddWaherhoseForm ? <AddWaherhoseForm displayAddWaherhoseForm={displayAddWaherhoseForm} setDisplayAddWaherhoseForm={setDisplayAddWaherhoseForm} />
            :

            <div className='flex flex-col gap-6'>
                <div className="flex my-3">
                    <h1 className='text-[#00B074] text-2xl'>Warehose list</h1>
                </div>
                <div>
                    <WarehoseFilter displayAddShopForm={displayAddWaherhoseForm} setDisplayAddShopForm={setDisplayAddWaherhoseForm} />
                </div>
                <div>
                    <SharedTable columns={columns} data={warehouses} />
                </div>
            </div>
        }
    </>)
}

export default Index