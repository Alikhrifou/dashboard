
import SharedFilter from '../../../components/SharedFilter'
import StatisticsCard from '../../../components/StatisticsCard'
import ProfitsIcon from '../../../assets/imageSVG/profitsIcon.svg'
import TotalLeadsIcon from '../../../assets/imageSVG/totalLeadsIcon.svg'
import ConfirmedLeadsIcon from '../../../assets/imageSVG/confirmedLeadsIcon.svg'
import PostPonedIcon from '../../../assets/imageSVG/postPonedIcon.svg'
import NoReplayIcon from '../../../assets/imageSVG/noReplayIcon.svg'
import CancelledIcon from '../../../assets/imageSVG/cancelledIcon.svg'
import CallLaterIcon from '../../../assets/imageSVG/callLater.svg'
import WrongIcon from '../../../assets/imageSVG/wrongIcon.svg'
import ExpiredIcon from '../../../assets/imageSVG/ExpiredIcon.svg'
import DuplicateIcon from '../../../assets/imageSVG/duplicateIcon.svg'
import UpsellsIcon from '../../../assets/imageSVG/upsellsIcon.svg'
import CrossCellsIcon from '../../../assets/imageSVG/crossCellsIcon.svg'

function Index() {
  return (<>
    <div>
      <SharedFilter title={''} adminDashboardLayout={true} dashboard={true} dashboardAdminPic={true} />
    </div>
    <div className='grid lg:grid-cols-5 my-5 gap-4'>
    <StatisticsCard title='Earnings' total={367} percentValue="+11.2 %" percentColor='#CB14B8' bgColor='#CB14B826' icon={ProfitsIcon} />
    <StatisticsCard title='Total leads' total={72} percentValue="11.2 %" percentColor='#2D9CDB' bgColor='#E3F5FF' icon={TotalLeadsIcon} />
    <StatisticsCard title='Confirmed leads' total={367} percentValue="+11.2 %" percentColor='#00B074' bgColor='#00B07426' icon={ConfirmedLeadsIcon} />
    <StatisticsCard title='Postponed' total={367} percentValue="+11.2 %" percentColor='#CB14B8' bgColor='#CB14B826' icon={PostPonedIcon} />
    <StatisticsCard title='No replay' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={NoReplayIcon} /> 
    <StatisticsCard title='Cancelled' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={CancelledIcon} />
    <StatisticsCard title='Call later scheduled' total={367} percentValue="+11.2 %" percentColor='#656D09' bgColor='#656D0926' icon={CallLaterIcon} />
    <StatisticsCard title='Wrong' total={367} percentValue="+11.2 %" percentColor='#EF3826' bgColor='#EF382626' icon={WrongIcon} />
    <StatisticsCard title='Expired' total={367} percentValue="+11.2 %" percentColor='#F3952B' bgColor='#F4952B26' icon={ExpiredIcon} />
    <StatisticsCard title='Duplicate' total={367} percentValue="+11.2 %" percentColor='#8976FF' bgColor='#8976FF26' icon={DuplicateIcon} />
    <StatisticsCard title='Upsells' total={367} percentValue="+11.2 %" percentColor='#8B9DB8' bgColor='#E5ECF6' icon={UpsellsIcon} />
        <StatisticsCard title='Cross sells' total={367} percentValue="+11.2 %" percentColor='#8B9DB8' bgColor='#E5ECF6' icon={CrossCellsIcon} />
    
    </div>
  </>
  )
}

export default Index