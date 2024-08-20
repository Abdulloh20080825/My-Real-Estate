import React from 'react';
import { IoIosSend } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';

const Contact = () => {
	return (
		<div className='h-full md:h-screen pb-10 bg-slate-100' id='contact'>
			<div className='w-[90%] md:w-[60%] mx-auto h-full flex items-center'>
				<div className='flex flex-col md:flex-row items-center space-x-2'>
					<div className='w-full md:w-1/2 flex flex-col space-y-10 h-auto'>
						<p className='font-bold text-3xl'>Contact Us</p>
						<p className='font-light'>
							If you have any questions or would like to schedule a consultation
							with one of our real estate experts, please don't hesitate to
							contact us
						</p>
						<div className='px-3 flex flex-col space-y-4'>
							<div className='flex space-x-2 items-center'>
								<IoIosSend className='text-orange-700 text-xl' />
								<p className='text-sm font-light'>
									1234 Main St, Anytown USA 12345
								</p>
							</div>
							<div className='flex space-x-2 items-center'>
								<IoLocation className='text-orange-700 text-xl' />
								<p>(123) 456-7890</p>
							</div>
							<div className='flex space-x-2 items-center'>
								<IoLocation className='text-orange-700 text-xl' />
								<p>info@example.com</p>
							</div>
						</div>
					</div>
					<form className='w-full md:w-1/2 flex flex-col space-y-10'>
						<div>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								placeholder=''
								id='name'
								className='border border-orange-800 rounded w-full px-2 py-3 font-light'
							/>
						</div>

						<div>
							<label htmlFor='email'>Email</label>
							<input
								type='text'
								placeholder=''
								id='email'
								className='border border-orange-800 rounded w-full px-2 py-3 font-light'
							/>
						</div>

						<div>
							<label htmlFor='phone'>Phone</label>
							<input
								type='text'
								placeholder=''
								id='phone'
								className='border border-orange-800 rounded w-full px-2 py-3 font-light'
							/>
						</div>
						<div>
							<label htmlFor='message'>Message</label>
							<textarea
								type='text'
								placeholder=''
								id='message'
								className='border border-orange-800 rounded w-full h-24 px-2 py-3'
							></textarea>
						</div>
						<div className='inline-block mx-auto'>
							<button className='px-4 py-2  bg-amber-800 text-white rounded-md hover:bg-amber-900 hover:text-white'>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
