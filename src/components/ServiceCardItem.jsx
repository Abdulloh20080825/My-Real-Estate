import React from 'react';

const ServiceCardItem = ({ data }) => {
	return (
		<div className='h-[450px] rounded-lg overflow-hidden bg-white'>
			<img src={data.url} alt='' className='h-1/2 w-full object-cover' />
			<div className='flex flex-col justify-between h-1/2 items-start p-4'>
				<p className='font-bold'>{data.title}</p>
				<p className='text-sm font-light'>{data.content}</p>
				<button className='mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700'>
					Learn More
				</button>
			</div>
		</div>
	);
};

export default ServiceCardItem;
