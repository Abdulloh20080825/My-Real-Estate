import React from 'react';

const FeautureCard = ({ data }) => {
	return (
		<div className='shadow-md h-[400px]  hover:shadow-black duration-500 bg-white rounded overflow-hidden'>
			<img src={data.url} alt='' className='h-1/2 w-full object-cover' />
			<div className='h-1/2 flex flex-col justify-between items-start p-5'>
				<div>
					<p>{data.title}</p>
					<p className='font-light text-sm'>{data.content}</p>
				</div>
				<p className='font-semibold'>{data.cost}</p>
				<button className='mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700'>
					View Details
				</button>
			</div>
		</div>
	);
};

export default FeautureCard;
