import { useSelector } from 'react-redux';
import Mymissionprofile from './Mymissionprofile';

const Mymissionlist = () => {
  const missions = useSelector((store) => store.mission.missions);
  const joinedMissions = missions.filter((mission) => mission.joined);
  return (
    <>
      <h4>My Missions</h4>

      {
        joinedMissions.length > 0 ? (
          joinedMissions.map((mission) => (
            <Mymissionprofile key={mission.mission_id} missionData={mission} />
          ))
        ) : (
          <p>Currently no mission reserved</p>
        )
    }
    </>
  );
};
export default Mymissionlist;
