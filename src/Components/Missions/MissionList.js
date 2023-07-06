import { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionData } from '../../Redux/missionSlice';
import MissionItem from './MissionItem';

const MissionList = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, isError } = useSelector((store) => store.mission);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionData());
    }
  }, [dispatch, missions.length]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Spmething went wrong while fetc mission</p>;
  }
  return (
    <Container style={{ marginTop: '3%' }}>
      <Table striped bordered style={{ tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '30%' }} />
          <col style={{ width: '50%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((missionItem) => (
            <MissionItem key={missionItem.mission_id} missionData={missionItem} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default MissionList;
