import { PiUsersThree } from 'react-icons/pi'
import SharedFilter from '../../../components/SharedFilter'
import CardUser from '../../../components/SharedUserCard'
import StatisticsCard from '../../../components/StatisticsCard'
import LineChart from '../../../components/ShardCharts/LineChart'
import BarChart from '../../../components/ShardCharts/BarChart'
import ToggleInput from '../../../components/ToogleInput'
import TotalLeadsIcon from '../../../assets/imageSVG/totalLeadsIcon.svg'
import NewLeadsIcon from '../../../assets/imageSVG/newLeadsIcon.svg'
import ConfirmedLeadsIcon from '../../../assets/imageSVG/confirmedLeadsIcon.svg'
import NoReplayIcon from '../../../assets/imageSVG/noReplayIcon.svg'
import CancelledIcon from '../../../assets/imageSVG/cancelledIcon.svg'
import CancelledPriceIcon from '../../../assets/imageSVG/cancelledPriceIcon.svg'
import ProccesingIcon from '../../../assets/imageSVG/processingIcon.svg'
import CallLaterIcon from '../../../assets/imageSVG/callLater.svg'
import PostPonedIcon from '../../../assets/imageSVG/postPonedIcon.svg'
import WrongIcon from '../../../assets/imageSVG/wrongIcon.svg'
import ExpiredIcon from '../../../assets/imageSVG/ExpiredIcon.svg'
import DuplicateIcon from '../../../assets/imageSVG/duplicateIcon.svg'
import UpsellsIcon from '../../../assets/imageSVG/upsellsIcon.svg'
import CrossCellsIcon from '../../../assets/imageSVG/crossCellsIcon.svg'
import DollarIcon from '../../../assets/imageSVG/dollarIcon.svg'

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

const BarChartData = [
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
      <SharedFilter confirmationLayout={true} title="Confirmation Rate" dashboard={true} teamFilter={true} ConfirmationFilter={true} AgentFilter={true} />
      <div className='flex items-center gap-4'>
        <PiUsersThree size={20} />
        <p className='text-black'>My team <span className='text-[#00B074]'>(Call center agents)</span> </p>
        {/* switch toogle */}
        <span className='flex items-center gap-4 text-sm font-thin text-[#1C1C1C]'>
          {/* <img src={DollarIcon} alt="" /> */}
          <ToggleInput/>View All
        </span>
      </div>
      <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth w-full space-x-4 scrollbar-hide py-4 scrollbar-hidden ">
        <CardUser email={'email@email.com'} status={true} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={false} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={true} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={true} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={false} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={true} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={false} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={true} role={'Admin'} fullName={'First User'} />
        <CardUser email={'email@email.com'} status={true} role={'Admin'} fullName={'First User'} />
      </div>
      <hr />
      <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-3'>
        <StatisticsCard title='Total leads' total={72} percentValue="11.2 %" percentColor='#2D9CDB' bgColor='#E3F5FF' icon={TotalLeadsIcon} />
        <StatisticsCard title='Processing orders' total={367} percentValue="+11.2 %" percentColor='#05B52C' bgColor='#05B52C26' icon={NewLeadsIcon} />
        <StatisticsCard title='Confirmed leads' total={367} percentValue="+11.2 %" percentColor='#00B074' bgColor='#00B07426' icon={ConfirmedLeadsIcon} />
        <StatisticsCard title='No replay' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={NoReplayIcon} />
        <StatisticsCard title='Cancelled' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={CancelledIcon} />
        <StatisticsCard title='Cancelled price' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={CancelledPriceIcon} />
        <StatisticsCard title='Processing' total={367} percentValue="+11.2 %" percentColor='#2BDCF4' bgColor='#2BDCF426' icon={ProccesingIcon} />
        <StatisticsCard title='Call later scheduled' total={367} percentValue="+11.2 %" percentColor='#656D09' bgColor='#656D0926' icon={CallLaterIcon} />
        <StatisticsCard title='Postponed' total={367} percentValue="+11.2 %" percentColor='#CB14B8' bgColor='#CB14B826' icon={PostPonedIcon} />
        <StatisticsCard title='Wrong' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={WrongIcon} />
        <StatisticsCard title='Expired' total={367} percentValue="+11.2 %" percentColor='#F3952B' bgColor='#F4952B26' icon={ExpiredIcon} />
        <StatisticsCard title='Duplicate' total={367} percentValue="+11.2 %" percentColor='#8976FF' bgColor='#8976FF26' icon={DuplicateIcon} />
        <StatisticsCard title='Upsells' total={367} percentValue="+11.2 %" percentColor='#8B9DB8' bgColor='#E5ECF6' icon={UpsellsIcon} />
        <StatisticsCard title='Cross sells' total={367} percentValue="+11.2 %" percentColor='#8B9DB8' bgColor='#E5ECF6' icon={CrossCellsIcon} />
      </div>
      <div className='grid lg:grid-cols-3 gap-3 '>
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