import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketSlice';
import missionReducer from './missionSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
