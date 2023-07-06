import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseAPI = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketData = createAsyncThunk('rockets/fetch', async () => {
  try {
    const response = await axios.get(baseAPI);
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
});
const initialState = {
  rockets: [],
  isLoading: false,
  isError: null,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reservedRocket: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocketItems) => {
        if (rocketItems.id === rocketId) {
          return { ...rocketItems, reserved: true };
        }
        return rocketItems;
      });
    },
    cancelReserved: (state, action) => {
      const rocketId = action.payload;
      state.rockets = state.rockets.map((rocketItems) => {
        if (rocketItems.id === rocketId) {
          return { ...rocketItems, reserved: false };
        }
        return rocketItems;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRocketData.fulfilled, (state, action) => {
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
          reserved: false,
        }));
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchRocketData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { reservedRocket, cancelReserved } = rocketSlice.actions;
export default rocketSlice.reducer;
