import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Section from './Section';

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<div className='fixed top-0 z-50 w-full h-[70px] flex justify-between items-center px-4 text-black bg-white'>
			<h1 className='tracking-tight font-normal text-4xl text-amber-800'>
				<a href=''>My Real Estate</a>
			</h1>
			{active ? <Section /> : null}
			<ul className='hidden md:flex space-x-7 font-normal'>
				<li>
					<a href='#'>Home</a>
				</li>

				<li>
					<a href='#about'>About Us</a>
				</li>

				<li>
					<a href='#feauture'>Our Feautures</a>
				</li>

				<li>
					<a href='#sale'>On Sale</a>
				</li>

				<li>
					<a href='#service'>Our Services</a>
				</li>
				<li>
					<a href='#demo'>Demo</a>
				</li>
				<li>
					<a href='#client'>Our Clients</a>
				</li>
			</ul>
			<button className='hidden md:block px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 hover:text-white mx-2'>
				<a href='#contact'> Contact Us</a>
			</button>
			<FiMenu
				className='text-xl font-bold block md:hidden cursor-pointer'
				onClick={() => setActive(!active)}
			/>
		</div>
	);
};

export default Navbar;
