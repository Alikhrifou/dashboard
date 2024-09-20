
import { GiSettingsKnobs } from 'react-icons/gi'
import SharedSelect from '../sharedSelectInput/SharedSelect'

interface IProps {
    reconfirmedFilter?: boolean
}


function SalesFilter({ reconfirmedFilter = false }: IProps) {
    return (


        <div className={`grid md:grid-cols-4 ${!reconfirmedFilter ? 'grid lg:grid-cols-6 gap-1' : 'lg:grid-cols-8'}  gap-2 mt-5`}>

            <SharedSelect label="Date type" width='100%' />
            <SharedSelect label="Product" width='100%'/>
            {reconfirmedFilter &&
                <SharedSelect label="Confirmation" />
            }
            <SharedSelect label="Delivery" width='100%'/>
            <SharedSelect label="Affectation" width='100%'/>
            {reconfirmedFilter &&
                <SharedSelect label="Msg/Wtsp status" width='100%'/>

            }
            <SharedSelect label="Sort" width='100%'/>
            <div className='flex justify-start items-center mt-5'>
                <button className='flex items-center gap-4 text-white h-14 px-4 py-2 rounded-xl bg-[#2D9CDB]'><GiSettingsKnobs className='rotate-90' />Filter</button>
            </div>
        </div>


    )
}

export default SalesFilter