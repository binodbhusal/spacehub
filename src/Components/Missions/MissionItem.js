import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinedMission, leaveMission } from '../../Redux/missionSlice';

const MissionItem =({missionData}) => {
  const isJoined= missionData.joined;
  const dispatch = useDispatch();
  const handleMission = ()=> {
    if(!isJoined){
      dispatch(joinedMission(missionData.mission_id));
    } else {
      dispatch(leaveMission(missionData.mission_id));
    }
  }
    return (
       
          <tr>
        <td>{missionData.mission_name}</td>
        <td style={{width:'60%'}}>{missionData.description}</td>
        <td> {isJoined ? <Badge pill bg="success">Active member</Badge> : <Badge bg="secondary">Not a member</Badge>}</td>
        <td>  {isJoined ? (
                <Button size="sm" type="button" onClick={handleMission}>Leave Mission</Button>
                ): (<Button size="sm" type="button" onClick={handleMission}>Join Mission</Button>)
             }</td> 
        </tr>
        
    )
}
MissionItem.propTypes = {
    missionData: PropTypes.shape({
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      joined: PropTypes.bool.isRequired,
    }).isRequired,
  };
export default MissionItem ;