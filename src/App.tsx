import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './model/rootReducer';
import { setScreenSize } from './model/globalUserInterfaceSlice';

const App: React.FC = () => {
	const { isModalVisible } = useSelector(
		(state: RootState) => state.globalUserInterface
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setScreenSize(window.innerWidth));
	});
	const updateSize = () => {
		dispatch(setScreenSize(window.innerWidth));
	};

	window.addEventListener('resize', updateSize);
	return (
		<div>
			<div>Test</div>
			{isModalVisible ? <h1>MODAL</h1> : null}
		</div>
	);
};

export default App;
