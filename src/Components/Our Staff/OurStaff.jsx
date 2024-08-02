import SubNav from "../About/SubNav";
import 'react-circular-progressbar/dist/styles.css';
import ShortCard from "./ShortCard";
import LongCard from "./LongCard";
import ProgressPage from "./ProgressPage";
import TabMain from "./TabMain";
import StaffAndTeacher from "./StaffAndTeacher";

const OurStaff = () => {
  return (
    <div>
    <SubNav>
      Our Staffs
    </SubNav>
    <ShortCard/>
    <LongCard/>
    <ProgressPage/>
    <TabMain/>
    <StaffAndTeacher/>
    {/* <Staff/> */}
    </div>
  )
}
export default OurStaff