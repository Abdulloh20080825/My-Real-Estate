import React from 'react';

const Section = () => {
	return (
		<div className='flex md:hidden flex-col bg-amber-800 text-white w-full absolute top-16 left-0 z-10'>
			<a href='#home' className='p-4 hover:bg-gray-700 cursor-pointer'>
				Home
			</a>
			<a href='#about' className='p-4 hover:bg-gray-700 cursor-pointer'>
				About Us
			</a>
			<a href='#feauture' className='p-4 hover:bg-gray-700 cursor-pointer'>
				Our Features
			</a>
			<a href='#sale' className='p-4 hover:bg-gray-700 cursor-pointer'>
				On Sale
			</a>
			<a href='#service' className='p-4 hover:bg-gray-700 cursor-pointer'>
				Our Services
			</a>
			<a href='#demo' className='p-4 hover:bg-gray-700 cursor-pointer'>
				Demo
			</a>
			<a href='#client' className='p-4 hover:bg-gray-700 cursor-pointer'>
				Our Clients
			</a>
			<a href='#contact' className='p-4 hover:bg-gray-700 cursor-pointer'>
				Contact Us
			</a>
		</div>
	);
};

export default Section;
