import React from 'react';
import image from '../img/aa.avif';

const About = () => {
	return (
		<div className='h-screen flex flex-col md:flex-row' id='about'>
			<div className='flex h-full items-center px-3 bg-orange-800 w-full md:w-1/2'>
				<img src={image} alt='' className='w-full rounded-se-[80%]' />
			</div>
			<div className='w-full text-center md:text-start md:w-1/2 flex flex-col space-y-5 justify-center px-5'>
				<h1 className='text-3xl text-orange-800 font-semibold '>About Us</h1>
				<p className='text-sm font-light'>
					Welcome to my premier real estate agency, where our mission is to
					provide exceptional service and expertise to help our clients achieve
					their real estate goals. With years of experience in the industry, our
					team of dedicated professionals has built a reputation for excellence
					and integrity.
				</p>
				<p className='text-sm font-light'>
					We are committed to staying up-to-date with the latest trends and
					technologies in the real estate market, and we use our knowledge and
					expertise to guide our clients through the buying and selling process
					with confidence.
				</p>
			</div>
		</div>
	);
};

export default About;
