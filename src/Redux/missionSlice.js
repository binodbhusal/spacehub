import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseAPI = 'https://api.spacexdata.com/v3/missions';
export const fetchMissionData = createAsyncThunk('missions/fetch', async () => {
    try {
const response = await axios.get(baseAPI);
console.log(response.data);
return response.data;
    }catch(error) {
        throw new Error('Something wrong with fetching missions');
    }
});

const initialState = {
    missions: [],
    isLoading: false,
    isError: null,
}
const missionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        joinedMission: (state, action) => {
            const missionId = action.payload;
            state.missions = state.missions.map((missionItems) => {
                if(missionItems.mission_id === missionId) {
                    return {...missionItems, joined: true}
                }
                return missionItems;
            })
        },
        leaveMission :(state, action) => {
            const missionId = action.payload;
            state.missions = state.missions.map((missionItems) => {
                if(missionItems.mission_id === missionId) {
                    return {...missionItems, joined: false}
                }
                return missionItems;
            })
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchMissionData.pending, (state)=> {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchMissionData.fulfilled, (state, action) => {
           state.missions = action.payload.map((missionitem) => ({
            mission_id: missionitem.mission_id,
            mission_name: missionitem.mission_name,
            description: missionitem.description,
            joined: false
           }))
           state.isError = false;
           state.isLoading = false;
        })
           .addCase(fetchMissionData.rejected, (state) => {
            state.isLoading =false;
            state.isError =true;
          
        });
    }

});
export const {joinedMission, leaveMission} = missionSlice.actions;
export default missionSlice.reducer;
