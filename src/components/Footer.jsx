import React from 'react';

const Footer = () => {
	return (
		<div className='bg-amber-800 py-7'>
			<div className='max-w-7xl mx-auto'>
				<nav className='flex flex-wrap items-center justify-center'>
					<div className='px-5 py-2'>
						<div className='text-xl text-white font-bold hover:text-gray-300 cursor-pointer'>
							Real Estate Company
						</div>
					</div>
					<div className='px-5 py-2 cursor-pointer'>
						<a className='text-white hover:text-gray-300' href='#'>
							Home
						</a>
					</div>
					<div className='px-5 py-2 cursor-pointer'>
						<a className='text-white hover:text-gray-300' href='#feauture'>
							Features
						</a>
					</div>
					<div className='px-5 py-2 cursor-pointer'>
						<a className='text-white hover:text-gray-300' href='#client'>
							Clients
						</a>
					</div>
					<div className='px-5 py-2 cursor-pointer'>
						<a className='text-white hover:text-gray-300' href='#about'>
							About Us
						</a>
					</div>
					<div className='px-5 py-2 cursor-pointer'>
						<a className='text-white hover:text-gray-300' href='#contact'>
							Contact Us
						</a>
					</div>
				</nav>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
					<div className='col-span-1'>
						<h3 className='text-white text-lg font-medium mb-4'>About Us</h3>
						<p className='text-white mb-4'>
							Real Estate Company is a leading provider of real estate services,
							with a focus on delivering exceptional value to our clients. Our
							team of experts has deep industry knowledge and a proven track
							record of success.
						</p>
					</div>
					<div className='col-span-1'>
						<h3 className='text-white text-lg font-medium mb-4'>Services</h3>
						<ul className='text-white'>
							<li className='mb-2'>Residential Real Estate</li>
							<li className='mb-2'>Commercial Real Estate</li>
							<li className='mb-2'>Property Management</li>
							<li className='mb-2'>Real Estate Investing</li>
						</ul>
					</div>
					<div className='col-span-1'>
						<h3 className='text-white text-lg font-medium mb-4'>
							Social links
						</h3>
						<ul className='text-white'>
							<li className='mb-2'>Facebook</li>
							<li className='mb-2'>Instagram</li>
							<li className='mb-2'>LinkedIn</li>
						</ul>
					</div>
				</div>
				<div>
					<p className='text-sm font-semibold text-white text-center mt-5'>
						© 2024 Real Estate Company. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
