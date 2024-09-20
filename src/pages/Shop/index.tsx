
import SharedTable from '../../components/SharedTable';
import ShopFilter from '../../components/ShopFilter';
import LogoTest from '../../assets/imageSVG/logoTest.svg'
import LogoTest2 from '../../assets/imageSVG/logoTest2.svg'
import AddShopForm from './AddShop'
import { useState } from 'react';

import LinkIcon from '../../assets/imageSVG/linkIcon.svg'
import EditeIcon from '../../assets/imageSVG/editeIcon.svg'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'
interface IShop {
    logo: JSX.Element;
    shopId: string;
    shopName: string;
    manager: string;
    dateCreated: string;
    url: JSX.Element;
    nbrOfProducts: number;
    status: JSX.Element;
    actions: JSX.Element;
}
const shops: IShop[] = [
    {
        logo: <img src={LogoTest} alt="Shop Logo" className="w-8 h-8 rounded" />,
        shopId: 'SHOP123',
        shopName: 'Shop 1',
        manager: 'Alice Johnson',
        dateCreated: '2023-08-15',
        url: <a href="" className='text-blue-600 underline'>https://shop1.com</a>,
        nbrOfProducts: 120,
        status: <p className='flex items-center justify-center text-[#00B074] px-4 py-1 rounded-lg border border-[#00B074]'>Active</p>,
        actions: (
            <div className="flex gap-2">
                <button className="text-blue-500">Link</button>
                <button className="text-green-500">Edit</button>
                <button className="text-red-500">Delete</button>
            </div>
        )
    },
    {
        logo: <img src={LogoTest2} alt="Shop Logo" className="w-8 h-8 rounded" />,
        shopId: 'SHOP456',
        shopName: 'Shop 2',
        manager: 'Bob Smith',
        dateCreated: '2023-09-10',
        url: <a href="" className='text-blue-600 underline'>https://shop2.com</a>,
        nbrOfProducts: 85,
        status: <p className='flex items-center justify-center text-red-500 px-4 py-1 rounded-lg border border-red-500'>In Active</p>,
        actions: (
            <></>
        )
    },
    {
        logo: <img src="path_to_logo3" alt="Shop Logo" className="w-8 h-8 rounded" />,
        shopId: 'SHOP789',
        shopName: 'Shop 3',
        manager: 'Charlie Davis',
        dateCreated: '2023-07-22',
        url: <a href="" className='text-blue-600 underline'>https://shop3.com</a>,
        nbrOfProducts: 150,
        status: <p className='flex items-center justify-center text-[#00B074] px-4 py-1 rounded-lg border border-[#00B074]'>Active</p>,
        actions: (
            <></>
        )
    }
];
const columns = [
    { header: 'Logo', accessor: 'logo' as keyof IShop },
    { header: 'Shop ID', accessor: 'shopId' as keyof IShop },
    { header: 'Shop Name', accessor: 'shopName' as keyof IShop },
    { header: 'Manager', accessor: 'manager' as keyof IShop },
    { header: 'Date Created', accessor: 'dateCreated' as keyof IShop },
    { header: 'URL/Link', accessor: 'url' as keyof IShop },
    { header: 'Number of Products', accessor: 'nbrOfProducts' as keyof IShop },
    { header: 'Status', accessor: 'status' as keyof IShop },
    {
        header: 'Actions',
        accessor: 'actions' as keyof IShop,
        render: () => (
            <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">
            <button
                className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                title="Edit Product"
            >
                <img src={LinkIcon} className='w-4 h-4 px-0' />
            </button>
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

    const [displayAddShopForm, setDisplayAddShopForm] = useState<boolean>(false)



    return (<>
        {displayAddShopForm ? <AddShopForm displayAddShopForm={displayAddShopForm} setDisplayAddShopForm={setDisplayAddShopForm}/>
            :

            <div className='flex flex-col gap-6'>
                <div className="flex my-3">
                    <h1 className='text-[#00B074] text-2xl'>Shop list</h1>
                </div>
                <div>
                    <ShopFilter displayAddShopForm={displayAddShopForm} setDisplayAddShopForm={setDisplayAddShopForm} />
                </div>
                <div>
                    <SharedTable columns={columns} data={shops} />
                </div>
            </div>
        }
    </>)
}

export default Index