import React from 'react';
import { cardData } from '../constant/card';
import ServiceCardItem from './ServiceCardItem';
const Services = () => {
	return (
		<div
			className='h-full md:h-screen px-10 mt-16 flex space-y-5 items-center bg-gradient-to-b from-white to-slate-200'
			id='service'
		>
			<div className='flex mx-auto  max-w-5xl flex-col space-y-6'>
				<h2 className='text-2xl font-bold'>
					Our <span className='text-orange-900'>Services</span>
				</h2>
				<p className='text-lg text-gray-700 mb-8'>
					We offer many services for our clients, Here are some of our services:
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
					{cardData.map((item, idx) => (
						<ServiceCardItem data={item} key={idx} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
