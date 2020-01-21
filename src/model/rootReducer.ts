import { combineReducers } from '@reduxjs/toolkit';
import globalUserInterfaceReducer from './globalUserInterfaceSlice';

const rootReducer = combineReducers({
	globalUserInterface: globalUserInterfaceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
