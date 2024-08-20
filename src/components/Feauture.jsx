import React from 'react';
import { feautureData } from '../constant/FeautureData';
import FeautureCard from './FeautureCard';

const Feauture = () => {
	return (
		<div
			className='h-full md:h-screen bg-gradient-to-b from-slate-100 to-slate-500 px-10'
			id='feauture'
		>
			<div className='flex flex-col justify-center max-w-5xl mx-auto space-y-6 h-full'>
				<h2 className='text-2xl font-bold'>
					Feature <span className='text-orange-900'>Properties</span>
				</h2>
				<p className='font-light'>Here are some of our featured properties:</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
					{feautureData.map((item, idx) => (
						<FeautureCard key={idx} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Feauture;
