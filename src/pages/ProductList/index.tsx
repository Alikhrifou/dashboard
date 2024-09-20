
import { VscEye } from 'react-icons/vsc';
import SharedTable from '../../components/SharedTable'
import { RiDeleteBinLine, RiFileList3Fill } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';
import Product from '../../assets/imageSVG/product.svg'
import SharedFilter from '../../components/SharedFilter'
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import AddProduct from '../AddProduct'
import EyeIcon from '../../assets/imageSVG/eyeIcon.svg'
import EditeIcon from '../../assets/imageSVG/editeIcon.svg'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'
import ActivityIcon from '../../assets/imageSVG/activityIcon.svg'
interface Product {
    Image: JSX.Element;
    Seller: string;
    SKU: number;
    Name: string;
    BuyngPrice: string;
    SellingPrice: string;
    Qty: number;
    CreatedAt: string;
    UpdatedDate: string;
    Country: string;
    Actions: string;

}
function Index() {

    const [displayAddProduct, setDisplayAddProduct] = useState<boolean>(false)


    const products: Product[] = [
        {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        }, {
            Seller: 'Seller A',
            SKU: 50,
            Name: 'Name 873',
            BuyngPrice: '$ 6900',
            Image: <><img src={Product} /></>,
            SellingPrice: '$ 7900',
            Qty: 0,
            CreatedAt: '02/03/2024',
            UpdatedDate: '04/03/2024',
            Country: 'Morocco',
            Actions: ''
        },
    ];

    const columns = [
        { header: 'Image', accessor: 'Image' as keyof Product },
        { header: 'Seller', accessor: 'Seller' as keyof Product },
        { header: 'SKU', accessor: 'SKU' as keyof Product },
        { header: 'Name', accessor: 'Name' as keyof Product },
        { header: 'Buyng Price', accessor: 'BuyngPrice' as keyof Product },
        { header: 'Selling Price', accessor: 'SellingPrice' as keyof Product },
        { header: 'Qty', accessor: 'Qty' as keyof Product },
        { header: 'Created At', accessor: 'CreatedAt' as keyof Product },
        { header: 'Updated Date', accessor: 'UpdatedDate' as keyof Product },
        { header: 'Country', accessor: 'Country' as keyof Product },
        {
            header: 'Actions',
            accessor: 'id' as keyof Product,
            render: () => (
                <div className="flex justify-evenly items-center divide-x-2 border rounded-l-lg rounded-r-lg p-0">
                    <button className=" text-white px-1 py-1"><img src={EyeIcon} className='w-4 h-4' /></button>
                    <button className=" text-white px-1 py-1"><img src={ActivityIcon} className='w-4 h-4 ml-1' /></button>
                    <button className=" text-white px-1 py-1"><img src={EditeIcon} className='w-4 h-4 ml-1' /></button>
                    <button className=" text-white px-1 py-1"><img src={DeleteIcon}  className='w-4 h-4'/></button>

                </div>
            )
        },
    ];
    return (<>{
        !displayAddProduct ?
            <div className='grid gap-3'>
                <div className="flex items-center">
                    <div>
                        <SharedFilter productLayout={true} title={''} DateFilter={true} />
                    </div>

                    <div className="flex-1 flex items-center w-full mt-6 mx-2">
                        <input
                            type="text"
                            className="w-full border p-2 bg-white text-gray-700 rounded-md h-14 outline-none"
                            placeholder="Search..."
                        />
                        <IoSearchOutline className='-ml-10'  color='#A4A4A4' size={25}/>
                    </div>
                    <div className=' mt-6'>
                        <button className='flex h-14 items-center px-2 bg-[#2D9CDB] py-2 rounded-xl text-white' onClick={()=>setDisplayAddProduct(!displayAddProduct)}>
                            <IoMdAddCircleOutline className='mr-3'/>
                            <p>Add a new product</p>
                        </button>
                    </div>

                </div>
                <SharedTable columns={columns} data={products} itemsPerPage={10}/>
            </div>
            : <AddProduct setDisplayAddProduct={setDisplayAddProduct} displayAddProduct={displayAddProduct}/>}
    </>)
}

export default Index