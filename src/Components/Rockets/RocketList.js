import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RocketItem from "./RocketItem";
import { fetchRocketData } from "../../Redux/rocketSlice";
const RocketList = () => {
const {rockets, isLoading, isError} = useSelector((store) => store.rocket)
const dispatch = useDispatch();
useEffect(()=> {
    if(rockets.length===0){
dispatch(fetchRocketData());
}
}, [dispatch, rockets.length]);
if(isLoading) {
    return <p>Loading...</p>
}
if(isError) {
    return <p>Something went wrong</p>
}

return (
    <ul style={{marginTop: '3%'}}>
        {rockets.map((rocketItem)=> (
            <RocketItem key={rocketItem.id} rocketData={rocketItem} />
      ))}
    </ul>
)
}
export default RocketList;