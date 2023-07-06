import { useSelector } from "react-redux"
import MyrocketProfile from "./MyrocketProfile";

const ReservedProfile = () => {
const rockets  = useSelector((store)=> store.rocket.rockets);
const reservedRockets= rockets.filter((rocket) => rocket.reserved)
return (
<>
<h4>My Rockets</h4>
    {
        reservedRockets.length > 0 ? (
        reservedRockets.map((rocket) => (
            <MyrocketProfile key={rocket.id} rocketData={rocket} />
        ))
        ) :(
        <p>Currently no rocket reserved</p>
        )
    }
</>
)
}
export default ReservedProfile;
