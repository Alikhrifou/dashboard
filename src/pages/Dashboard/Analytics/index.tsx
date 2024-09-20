import { PiUsersThree } from 'react-icons/pi'
import SharedFilter from '../../../components/SharedFilter'
import StatisticsCard from '../../../components/StatisticsCard'
import { TfiShine } from 'react-icons/tfi'
import { IoReloadCircleOutline } from 'react-icons/io5'
import LineChart from '../../../components/ShardCharts/LineChart'
import BarChart from '../../../components/ShardCharts/BarChart'
import ToggleInput from '../../../components/ToogleInput'

import TotalLeadsIcon from '../../../assets/imageSVG/totalLeadsIcon.svg'
import ConfirmedIcon from '../../../assets/imageSVG/confirmedIcon.svg'
import DelivredIcon from '../../../assets/imageSVG/deliveredIcon.svg'
import TotalAdsIcon from '../../../assets/imageSVG/totalAdsIcon.svg'
import TurnoverIcon from '../../../assets/imageSVG/turnoverIcon.svg'
import AOVIcon from '../../../assets/imageSVG/aovIcon.svg'
import CostPerLeadIcon from '../../../assets/imageSVG/costPerLeadIcon.svg'
import CostPerDelivredIcon from '../../../assets/imageSVG/costPerDelivredIcon.svg'


const LineChartData = [
  {
    "id": "Confirmed",
    "color": "hsl(47, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 129
      },
      {
        "x": "helicopter",
        "y": 175
      },
      {
        "x": "boat",
        "y": 111
      },
      {
        "x": "train",
        "y": 280
      },
      {
        "x": "subway",
        "y": 82
      },
      {
        "x": "bus",
        "y": 294
      },
      {
        "x": "car",
        "y": 263
      },
      {
        "x": "moto",
        "y": 60
      },
      {
        "x": "bicycle",
        "y": 113
      },
      {
        "x": "horse",
        "y": 133
      },
      {
        "x": "skateboard",
        "y": 247
      },
      {
        "x": "others",
        "y": 94
      }
    ]
  },
  {
    "id": "Leads",
    "color": "hsl(344, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 290
      },
      {
        "x": "helicopter",
        "y": 55
      },
      {
        "x": "boat",
        "y": 170
      },
      {
        "x": "train",
        "y": 16
      },
      {
        "x": "subway",
        "y": 44
      },
      {
        "x": "bus",
        "y": 37
      },
      {
        "x": "car",
        "y": 148
      },
      {
        "x": "moto",
        "y": 142
      },
      {
        "x": "bicycle",
        "y": 246
      },
      {
        "x": "horse",
        "y": 239
      },
      {
        "x": "skateboard",
        "y": 230
      },
      {
        "x": "others",
        "y": 243
      }
    ]
  },
  {
    "id": "Dilivered",
    "color": "hsl(65, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 254
      },
      {
        "x": "helicopter",
        "y": 179
      },
      {
        "x": "boat",
        "y": 260
      },
      {
        "x": "train",
        "y": 220
      },
      {
        "x": "subway",
        "y": 143
      },
      {
        "x": "bus",
        "y": 192
      },
      {
        "x": "car",
        "y": 282
      },
      {
        "x": "moto",
        "y": 201
      },
      {
        "x": "bicycle",
        "y": 230
      },
      {
        "x": "horse",
        "y": 241
      },
      {
        "x": "skateboard",
        "y": 12
      },
      {
        "x": "others",
        "y": 229
      }
    ]
  },

]

const BarChartData=[
  {
    "country": "AD",
    "hot dog": 141,
    "hot dogColor": "hsl(107, 70%, 50%)",
 
  },
  {
    "country": "AE",
    "donut": 42,
    "donutColor": "hsl(155.80645161290323, 70.45454545454545%, 17.254901960784313%)"
  },
  {
    "country": "AF",
    "hot dog": 183,
    "hot dogColor": "hsl(0, 70.19607843137256%, 50%)",
  },
  {
    "country": "AG",
    "hot dog": 68,
    "hot dogColor": "hsl(56, 70%, 50%)",

  },
  {
    "country": "AI",
    "hot dog": 89,
    "hot dogColor": "hsl(281, 70%, 50%)",
   
  },
  {
    "country": "AL",
    "hot dog": 112,
    "hot dogColor": "hsl(4, 70%, 50%)",

  },

]


function index() {
  return (
    <main className='grid gap-4'>
      <SharedFilter title="Analytics" analyticsLayout={true}  dashboard={true} PlateformFilter={true} AgentFilter={true} />
      <div className='flex items-center gap-4'>
        <PiUsersThree size={20} />
        <p className='text-black'>My team <span className='text-[#00B074]'>(Call center agents)</span> </p>
        {/* switch toogle */}
        <span className='flex items-center  gap-4 text-sm font-thin text-[#1C1C1C]'>
         <ToggleInput/> View All
        </span>
      </div>
  
      <hr />
      <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-3'>
      <StatisticsCard title='Total leads' total={72} percentValue="11.2 %" percentColor='#2D9CDB' bgColor='#E3F5FF' icon={TotalLeadsIcon} />
      <StatisticsCard title='Confirmed' total={72} percentValue="11.2 %" percentColor='#2D9CDB' bgColor='#E3F5FF' icon={ConfirmedIcon} />
        <StatisticsCard title='Delivered' total={367} percentValue="+11.2%" percentColor='#05B52C' bgColor='#05B52C26' icon={DelivredIcon} />
        <StatisticsCard title='Total AD spent' total={367} percentValue="+11.2%" percentColor='#FFA51E' bgColor='#FFA51E26' icon={TotalAdsIcon} />
        <StatisticsCard title='Turnover' total={367} percentValue="+11.2%" percentColor='#05B52C' bgColor='#05B52C26' icon={TurnoverIcon} />
        <StatisticsCard title='AOV' total={367} percentValue="+11.2%" percentColor='#1BEFEF' bgColor='#1BEFEF26' icon={AOVIcon} />
        <StatisticsCard title='Cost per lead' total={367} percentValue="+11.2%" percentColor='#2D9CDB' bgColor='#E5ECF6' icon={CostPerLeadIcon} />
        <StatisticsCard title='Cost per delivered' total={367} percentValue="+11.2%" percentColor='#656D09' bgColor='#656D0926' icon={CostPerDelivredIcon} />
        <StatisticsCard title='Cost per order' total={156} percentValue="+11.2%" percentColor='#656D09' bgColor='#656D0926' icon={CostPerDelivredIcon} />
        <StatisticsCard title='Cost per unit' total={15} percentValue="+11.2%" percentColor='#656D09' bgColor='#656D0926' icon={CostPerDelivredIcon} />
      </div>
      <div className='grid lg:grid-cols-3 gap-3'>
        <div className="lg:col-span-2 bg-white py-3 shadow-md rounded-lg">
          <LineChart data={LineChartData} />
        </div>
        <div className="col-span-1 w-full bg-white py-3 shadow-md rounded-lg">
          <BarChart data={BarChartData} />
         
        </div>

      </div>
    </main>
  )
}

export default index