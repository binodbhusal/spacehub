import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { leaveMission } from '../../Redux/missionSlice';
import {  Button } from 'react-bootstrap';
const Mymissionprofile = ({missionData}) => {
    const dispatch = useDispatch();
    const leavereservation =(mission_id) =>{
        dispatch(leaveMission(mission_id));
      }
      return (
        <>
        <table style={{width:'100%', border: '1px solid #d3d3d3'}}>
          <tr style={{display:'flex', justifyContent:'space-between'}}>
        <td ><h5>{missionData.mission_name}</h5></td>
       <td><Button size="sm" type="button" onClick={()=> leavereservation(missionData.mission_id)}> Leave mission</Button></td>
        </tr>
        </table>
        </>
      )
}
export default Mymissionprofile;

Mymissionprofile.propTypes = {
    rocketData: PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
    }).isRequired,
  };