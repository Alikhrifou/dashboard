
interface IndexOptions {
    title?: string,
    total?: number,
    percentValue?: string,
    icon?: string,
    percentColor?: string,
    bgColor?: string

}

function index({ title, total, percentValue, icon, bgColor, percentColor }: IndexOptions) {
    return (
        <main className={`grid grid-cols-3 rounded-xl p-3 items-center align-middle justify-items-center`} style={{ backgroundColor: `${bgColor}` }}>
            <div className="col-span-2 gap-3 flex flex-col">
                <p className="text-start">{title}</p>
                <div className="flex justify-between gap-10">
                    <h1 className='text-lg'>{total}</h1>
                    <span className={`rounded-md px-2 py-1 text-sm text-white`} style={{ backgroundColor: `${percentColor}` }}>{percentValue} </span>
                </div>

            </div>
            <div className="flex justify-center ml-7 items-center col-span-1 bg-white rounded-full w-12 h-12">
                <img src={icon} />
                {/* <TfiShine size={35} className='bg-white p-1 rounded-full'/> */}
            </div>
        </main>
    )
}

export default index