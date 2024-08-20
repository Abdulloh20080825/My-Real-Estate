import React from 'react';
import img from '../img/depositphotos_22772802-stock-photo-tokyo-cityscape.jpg';

const Home = () => {
	return (
		<div className='w-full h-[90vh] p-8 bg-gradient-to-b from-white to-gray-400'>
			<div className='flex flex-col-reverse md:flex-row justify-between max-w-[1400px] mx-auto items-center h-full'>
				<div className='flex flex-col space-y-8'>
					<p className='text-4xl font-bold text-gray-800 '>
						Find Your{' '}
						<span className='text-amber-800 text-center md:text-start'>
							Dream Home
						</span>
					</p>
					<p className='text-lg text-gray-700 text-center md:text-start'>
						Welcome to our real estate agency, where finding your dream home is
						our top priority. Our team of experienced agents is dedicated to
						providing exceptional service and helping you navigate the complex
						process of buying or selling a property
					</p>
					<form className='flex flex-col space-y-2 md:flex-row space-x-9'>
						<input
							type='text'
							placeholder='Your Email'
							className='py-2 px-4 rounded-full'
						/>
						<button className='px-6 py-3 bg-amber-800 text-white rounded-full shadow-lg hover:bg-amber-900 w-full'>
							Get Started
						</button>
					</form>
				</div>
				<img src={img} alt='' className='image' />
			</div>
		</div>
	);
};

export default Home;
