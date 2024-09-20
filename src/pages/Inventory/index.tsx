
import InventoryFilter from '../../components/InventoryFilter'
import SharedTable from '../../components/SharedTable'

import TestPic1 from '../../assets/pic1.png'
import TestPic2 from '../../assets/pic2.png'
import EyeIcon from '../../assets/imageSVG/eyeIcon.svg'
import EditeIcon from '../../assets/imageSVG/editeIcon.svg'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'

interface IProductIventory {
    image: JSX.Element;
    Seller: string;
    SKU: string;
    Name: string;
    BuyingPrice: number;
    SellingPrice: number;
    CreatedAt: string;
    UpdatedAt: string;
    Country: string;
    StockQty: number;
    Status: JSX.Element;
    Actions: JSX.Element;
}

const products: IProductIventory[] = [
    {
        image: <img src={TestPic1} alt="Product Image" className="w-8 h-8 rounded" />,
        Seller: 'Seller A',
        SKU: 'SKU12345',
        Name: 'Product 1',
        BuyingPrice: 100,
        SellingPrice: 150,
        CreatedAt: '2024-09-01',
        UpdatedAt: '2024-09-05',
        Country: 'USA',
        StockQty: 20,
        Status: <p className='flex items-center justify-center text-[#00B074] px-4 py-1 rounded-lg border border-[#00B074]'>In Stock</p>,
        Actions: (
            <div className="flex gap-2">
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500">Delete</button>
                <button className="text-green-500">View</button>
            </div>
        )
    },
    {
        image: <img src={TestPic2} alt="Product Image" className="w-8 h-8 rounded" />,
        Seller: 'Seller A',
        SKU: 'SKU67890',
        Name: 'Product 2',
        BuyingPrice: 200,
        SellingPrice: 300,
        CreatedAt: '2024-09-02',
        UpdatedAt: '2024-09-06',
        Country: 'Canada',
        StockQty: 15,
        Status: <p className='flex items-center justify-center text-[#00B074] px-4 py-1 rounded-lg border border-[#00B074]'>In Stock</p>,
        Actions: (
            <div className="flex gap-2">
                <button className="text-blue-500">Edit</button>
                <button className="text-red-500">Delete</button>
                <button className="text-green-500">View</button>
            </div>
        )
    }
];
const columns = [
    { header: 'Image', accessor: 'image' as keyof IProductIventory },
    { header: 'Seller', accessor: 'Seller' as keyof IProductIventory },
    { header: 'SKU', accessor: 'SKU' as keyof IProductIventory },
    { header: 'Name', accessor: 'Name' as keyof IProductIventory },
    { header: 'Buying Price', accessor: 'BuyingPrice' as keyof IProductIventory },
    { header: 'Selling Price', accessor: 'SellingPrice' as keyof IProductIventory },
    { header: 'Created At', accessor: 'CreatedAt' as keyof IProductIventory },
    { header: 'Updated Date', accessor: 'UpdatedAt' as keyof IProductIventory },
    { header: 'Country', accessor: 'Country' as keyof IProductIventory },
    { header: 'Stock Qty', accessor: 'StockQty' as keyof IProductIventory },
    { header: 'Status', accessor: 'Status' as keyof IProductIventory },
    {
        header: 'Actions',
        accessor: 'Actions' as keyof IProductIventory,
        render: () => (
            <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">
                <button
                    className="inline-block border-e px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Edit Product"
                >
                    <img src={EyeIcon} className='w-4 h-4 px-0' />
                </button>

                <button
                    className="inline-block px-3 py-1 border-e text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                >
                    <img src={EditeIcon} className='w-4 h-4' />
                </button>
                <button
                    className="inline-block px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                >
                    <img src={DeleteIcon} className='w-4 h-4' />
                </button>
            </span>
        ),
    }
];

function index() {
    return (
        <div className='flex flex-col gap-5'>
            <p className='font-normal text-2xl text-[#00B074]'>Inventory list</p>
            <div>
                <InventoryFilter />
            </div>
            <div>
                <SharedTable columns={columns} data={products} />
            </div>
        </div>
    )
}

export default index