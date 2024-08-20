import React from 'react';

const ClientItem = ({ data }) => {
	return (
		<div className='h-[450px] rounded-lg overflow-hidden'>
			<img
				src={data.url}
				alt=''
				className='rounded-[50%] w-[100px] h-[100px] object-cover'
			/>
			<div className='flex flex-col justify-between h-1/2 items-start p-4 rounded-lg shadow-lg bg-white'>
				<p className='font-light'>{data.description}</p>
				<p className='text-md font-light'>{data.name}</p>
			</div>
		</div>
	);
};

export default ClientItem;
