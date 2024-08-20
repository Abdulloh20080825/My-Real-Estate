import { FcHome } from 'react-icons/fc';
import { FaLocationDot } from 'react-icons/fa6';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import videoSrc from '../video/show.mp4';

const Demo = () => {
	return (
		<div className='h-full md:h-screen flex flex-col md:flex-row' id='demo'>
			<div className='w-full md:w-1/2 flex flex-col space-y-5 justify-center px-5'>
				<h1 className='text-center text-4xl font-bold'>
					Real <span className='text-orange-800'>Estate</span> Video
				</h1>
				<video src={videoSrc} className='w-full ' controls></video>
			</div>
			<div className='flex h-full px-3 bg-orange-800 pb-10 w-full md:w-1/2 text-white  items-center'>
				<div className='w-2/3 md:w-1/2 mx-auto flex flex-col space-y-5'>
					<h3 className='text-xl font-semibold '>My Real Estate</h3>
					<h2 className='text-3xl font-bold'>Why Choose Our Properties?</h2>
					<div className='flex flex-col space-y-8 px-5'>
						<div className='flex items-center space-x-2'>
							<FcHome className='bg-white  p-1 text-4xl' />
							<p className='text-xl font-light'>
								Spacious and comfortable living spaces
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<FaLocationDot className='bg-white text-black p-1 text-4xl' />
							<p className='text-xl font-light'>
								Located in prime areas with excellent infrastructure
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<RiMoneyDollarCircleFill className='bg-white text-black  p-1 text-4xl' />
							<p className='text-xl font-light'>
								Affordable prices and flexible payment plans
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Demo;
