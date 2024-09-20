import { FiTrash2 } from 'react-icons/fi'
import AddPicture from '../../assets/pic.png'
import AddPicture1 from '../../assets/pic1.png'
import AddPicture2 from '../../assets/pic2.png'
import AddPicture3 from '../../assets/pic3.png'
import ToggleInput from '../../components/ToogleInput'
import { IoMdAddCircleOutline } from 'react-icons/io'
import SharedTable from '../../components/SharedTable'
import { TfiSave } from 'react-icons/tfi'
import SharedSelect from '../../components/sharedSelectInput/SharedSelect'
import DeleteIcon from '../../assets/imageSVG/deleteIcon.svg'
import EditeIcon from '../../assets/imageSVG/editeIcon.svg'

interface Props {
    setDisplayAddProduct: React.Dispatch<React.SetStateAction<boolean>>;
    displayAddProduct: boolean;
}

interface Product {
    VariantImage: JSX.Element;
    size: number;
    Color: string;
    Qty: number;
    Price: string;
    StockAlert: number;
    Actions: ""

}
interface Data1 {
    id: number;
    Quantity: number;
    Price: string
    Note: string;
    Actions: ""

}
function Index({ setDisplayAddProduct, displayAddProduct }: Props) {

    // const [displayAddProduct, setDisplayAddProduct] = useState<boolean>(true)

    const products: Product[] = [
        {
            VariantImage: <div className='flex items-center gap-5 justify-start'>
                <img src={AddPicture} className='g-8 w-8' />
                <a href="" className='underline'>Link picture</a>
            </div>,
            size: 50,
            Color: 'black',
            Qty: 0,
            Price: '$ 7900',
            StockAlert: 30,
            Actions: ''

        },
        {
            VariantImage: <div className='flex items-center gap-5 justify-start'>
                <img src={AddPicture1} className='g-8 w-8' />
                <a href="" className='underline'>Link picture</a>
            </div>,
            size: 50,
            Color: 'black',
            Qty: 0,
            Price: '$ 7900',
            StockAlert: 30,
            Actions: ''

        }
    ];
    const data1: Data1[] = [
        {
            id: 1, Quantity: 2, Price: '$29.99', Note: 'Some note',
            Actions: ''
        },
        {
            id: 2, Quantity: 1, Price: '$49.99', Note: 'Another note',
            Actions: ''
        },
        {
            id: 3, Quantity: 5, Price: '$9.99', Note: 'Extra note',
            Actions: ''
        },
    ];
    const columns = [
        { header: 'VariantImage', accessor: 'VariantImage' as keyof Product },
        { header: 'size', accessor: 'size' as keyof Product },
        { header: 'Color', accessor: 'Color' as keyof Product },
        { header: 'Qty', accessor: 'Qty' as keyof Product },
        { header: 'Price', accessor: 'Price' as keyof Product },
        { header: 'Stock Alert', accessor: 'StockAlert' as keyof Product },
        {
            header: 'Actions',
            accessor: 'id' as keyof Product,
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
        },
    ];
    const columns1 = [
        { header: 'Quantity', accessor: 'Quantity' as keyof Data1 },
        { header: 'Price', accessor: 'Price' as keyof Data1 },
        { header: 'Note', accessor: 'Note' as keyof Data1 },
        {
            header: 'Actions',
            accessor: 'actions',
            render: () => (
                <span className="inline-flex overflow-hidden rounded-lg border border-[##979797] bg-[##D5D5D5] shadow-sm">

                    <button
                        className="inline-block px-3 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
                        title="Delete Product"
                    >
                        <img src={DeleteIcon} className='w-4 h-5' />
                    </button>
                </span>
            ),
        },
    ];



    return (<>

        <section className=''>
            <p className='text-[#00B074]  text-2xl mb-10'>Add a new product to the catalogue</p>
            {/* form section */}
            <div className="grid grid-cols-3 mt-3 gap-3">

                <div className="col-span-2 grid gap-3">
                    <div className="grid grid-cols-5 gap-3">
                        <div className="col-span-2 grid">
                            <label htmlFor="" className='text-[#6B6B6B]'>Product name</label>
                            <input type="text" name="" id="" className='h-12 rounded-xl border' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className='text-[#6B6B6B]'>SKU</label>
                            <input type="text" name="" id="" className='h-12 rounded-xl border' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className='text-[#6B6B6B]'>Buing price</label>
                            <input type="text" name="" id="" className='h-12 rounded-xl border' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className='text-[#6B6B6B]'>Buing price</label>
                            <input type="text" name="" id="" className='h-12 rounded-xl border' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="" className='text-[#6B6B6B]'>Store link</label>
                            <input type="text" name="" id="" className='h-12 rounded-xl border' />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className='text-[#6B6B6B]'>Video link</label>
                            <input type="text" name="" id="" className='h-12 rounded-xl border' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col">
                            <SharedSelect label='Country' width='25rem' />

                        </div> <div className="flex flex-col">
                            <SharedSelect label='Warehouse' width='25rem' />

                        </div>

                    </div>
                </div>

                <div className="col-span-1 row-span-3 flex flex-col">
                    <label htmlFor="" className='text-[#6B6B6B]'>Description</label>
                    <textarea name="" id="" rows={9} className='border rounded-lg w-full'></textarea>
                </div>
            </div>

            {/* Photos section */}

            <div className="flex flex-wrap gap-3">
                <div className="flex flex-col gap-3">
                    <p className='font-bold'>Photos</p>
                    <p className='text-sm text-[#A3A3A3]'>Use up to 6 photos to show your<br />
                        items most important qualities</p>
                </div>
                <div>
                    <img src={AddPicture} alt="" className='w-20 h-20' />
                </div>
                <div>
                    <img src={AddPicture1} alt="" className='w-20 h-20' />
                    <p className='flex justify-center items-center gap-1 text-red-500 text-center text-xs mt-2'>
                        <FiTrash2 />
                        Delete</p>
                </div>
                <div>
                    <img src={AddPicture2} alt="" className='w-20 h-20' />
                    <p className='flex justify-center items-center gap-1 text-red-500 text-center text-xs mt-2'>
                        <FiTrash2 />
                        Delete</p>
                </div>
                <div>
                    <img src={AddPicture3} alt="" className='w-20 h-20' />
                </div>
                <div>
                    <img src={AddPicture3} alt="" className='w-20 h-20' />
                </div>
                <div>
                    <img src={AddPicture3} alt="" className='w-20 h-20' />
                </div>
                <div>
                    <img src={AddPicture3} alt="" className='w-20 h-20' />
                </div>
                <div>
                    <img src={AddPicture3} alt="" className='w-20 h-20' />
                </div>
                <div>
                    <img src={AddPicture3} alt="" className='w-20 h-20' />
                </div>
            </div>

            <div className="flex items-center justify-start gap-3 my-3">
                <ToggleInput />
                <p className='text-xs'>Add variants</p>
            </div>
            <section className='bg-white p-2 rounded-lg'>

                <div className="grid lg:grid-cols-5 gap-5 align-middle items-center">
                    <div className="flex flex-col gap-2">
                        <SharedSelect label='Size' width='  ' />

                    </div>
                    <div className="flex flex-col gap-2">
                        <SharedSelect label='Color' width=' ' />

                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-[#6B6B6B] text-sm'>Quantity</label>
                        <input type="text" name="" id="" className='h-14 px-4 rounded-xl border' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='text-[#6B6B6B] text-sm'>Stock alert</label>
                        <input type="text" name="" id="" className='h-14 px-4 rounded-xl border' />
                    </div>
                    <div className='mt-5'>
                        <button className='flex items-center gap-3 px-4 h-12 bg-[#2D9CDB] py-2 rounded-xl text-white' onClick={() => (null)}>
                            <IoMdAddCircleOutline />
                            <p>Add </p>
                        </button>
                    </div>
                </div>
                <div className='mt-5'>
                    <SharedTable columns={columns} data={products} />
                </div>
            </section>


            {/* Affectation */}
            <div className='flex justify-start gap-2 items-center font-bold my-6'>
                <p className='text-[#00B074]'>Offers </p>
                <hr className='w-full h-1 bg-[#00B074]' />
            </div>
            <section className='bg-white p-2 rounded-lg my-2'>

                <div className="grid lg:grid-cols-2 gap-8">
                    <section className='flex flex-col'>
                        <div className='flex justify-start gap-2 items-center font-bold'>
                            <p className='text-[#00B074] w-16'>Up-sell </p>
                            <hr className='w-full h-1 bg-[#00B074]' />
                        </div>


                        <div className="grid lg:grid-cols-2 gap-4 my-3">
                            <div className="flex flex-col">
                                <label htmlFor="" className='text-[#6B6B6B]'>Quantity</label>
                                <input type="text" name="" id="" className='h-12 rounded-xl border' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className='text-[#6B6B6B]'>Price</label>
                                <input type="text" name="" id="" className='h-12 rounded-xl border' />
                            </div>
                        </div>
                        <div className="flex gap-4 my-2 items-center align-middle">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className='text-[#6B6B6B]'>Note</label>
                                <input type="text" name="" id="" className='h-12 rounded-xl border' />
                            </div>
                            <div className='mt-6'>
                                <button className='flex gap-3 items-center px-4 h-12 bg-[#2D9CDB] py-2 rounded-xl text-white' onClick={() => (null)}>
                                    <IoMdAddCircleOutline />
                                    <p>Add </p>
                                </button>
                            </div>
                        </div>

                        <SharedTable columns={columns1} data={data1} />


                    </section>

                    <section className='flex flex-col'>
                        <div className='flex justify-start gap-2 items-center font-bold'>
                            <p className='text-[#00B074] w-24'>Cross-sell</p>
                            <hr className='w-full h-1 bg-[#00B074]' />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4 my-3">
                            <div className="flex flex-col">
                                <label htmlFor="" className='text-[#6B6B6B]'>Products</label>
                                <input type="text" name="" id="" className='h-12 rounded-xl border' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className='text-[#6B6B6B]'>Price</label>
                                <input type="text" name="" id="" className='h-12 rounded-xl border' />
                            </div>
                        </div>
                        <div className="flex gap-4 my-2 items-center align-middle">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className='text-[#6B6B6B]'>Note</label>
                                <input type="text" name="" id="" className='h-12 rounded-xl border' />
                            </div>
                            <div className='mt-6'>
                                <button className='flex gap-3 items-center px-4 h-12 bg-[#2D9CDB] py-2 rounded-xl text-white' onClick={() => (null)}>
                                    <IoMdAddCircleOutline />
                                    <p>Add </p>
                                </button>
                            </div>
                        </div>

                        <SharedTable columns={columns1} data={data1} />

                    </section>




                </div>
            </section>




            <section className='bg-white px-2 py-1 rounded-lg'>
                <div className='flex justify-start gap-2 items-center font-bold my-6'>
                    <p className='text-[#00B074]'>Affectaion </p>
                    <hr className='w-full h-1 bg-[#00B074]' />
                </div>
                <div className="flex flex-col my-3 w-[25rem]">
                    <SharedSelect label='Shipping company' width='25rem' />

                </div>
            </section>
        </section>


        <div className="absolute flex justify-between items-center my-3 mx-auto rounded-lg w-[96%] bg-white px-4 py-5">
            <button className='border border-black rounded-xl px-4 py-2' onClick={() => setDisplayAddProduct(!displayAddProduct)}>cancel</button>
            <button className='flex items-center gap-3 text-white border rounded-xl px-4 py-2 bg-[#2D9CDB]'><TfiSave />save</button>
        </div>
    </>)
}

export default Index