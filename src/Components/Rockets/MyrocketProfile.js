import { cancelReserved } from "../../Redux/rocketSlice";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
const { useDispatch } = require("react-redux");

const MyrocketProfile= ({rocketData}) => {
const dispatch = useDispatch();
const cancelreservation =(rocketId) =>{
  dispatch(cancelReserved(rocketId));
}
return(
  <table style={{border:'1px solid #d3d3d3', width:'100%'}}>
          <tr style={{display:'flex', justifyContent:'space-between'}}>
  <td><h5>{rocketData.rocket_name}</h5></td>
  <td><Button size="sm" type="button" onClick={()=> cancelreservation(rocketData.id)}> Cancel reserved</Button></td>
  </tr>
  </table>
)
}

MyrocketProfile.propTypes = {
    rocketData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      rocket_name: PropTypes.string.isRequired,
    }).isRequired,
  };
  export default MyrocketProfile;