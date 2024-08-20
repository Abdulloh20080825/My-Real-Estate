import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
	return (
		<div>
			<div className='h-[10%]'>
				<Navbar />
			</div>
			<Main />
		</div>
	);
};

export default App;
