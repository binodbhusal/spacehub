import Mymissionlist from "../Components/Missions/Mymissionlist";
import ReservedProfile from "../Components/Rockets/ReservedProfile";

const Myprofile = ()=> {
    return (
        <div style={{ display:'flex',justifyContent:'center', gap:'10%', width:'100%', marginTop: '5%'}}>
        <div style={{flexBasis:'30%', gap:'10%', width:'100%'}}>
        <ReservedProfile />
        </div>
        <div style={{flexBasis:'30%', gap:'10%', width:'100%'}}>
        <Mymissionlist />
        </div>
        </div>
    )
}
export default Myprofile;