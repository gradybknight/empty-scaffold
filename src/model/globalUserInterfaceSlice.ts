import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const smallSize = 600;
export type AllowedScreens =
	| 'Main'
export interface TabInformation {
	tabIndex: number;
	screenName: AllowedScreens;
}

type OverallDisplayState = {
	isModalVisible: boolean;
	isBigScreen: boolean;
} & TabInformation;

let initialState: OverallDisplayState = {
	tabIndex: 0,
	screenName: 'Main',
	isModalVisible: false,
	isBigScreen: true,
};

const globalUserInterfaceSlice = createSlice({
	name: 'globalUserInterface',
	initialState,
	reducers: {
		setCurrentTab(state, action: PayloadAction<TabInformation>) {
			state.tabIndex = action.payload.tabIndex;
			state.screenName = action.payload.screenName;
		},
		setScreenSize(state, action: PayloadAction<number>) {
			state.isBigScreen = action.payload > smallSize ? true : false;
		},
		setModalVisibility(state, action: PayloadAction<boolean>) {
			state.isModalVisible = action.payload;
		},
	},
});

export const {
	setCurrentTab,
	setScreenSize,
	setModalVisibility,
} = globalUserInterfaceSlice.actions;

export default globalUserInterfaceSlice.reducer;
