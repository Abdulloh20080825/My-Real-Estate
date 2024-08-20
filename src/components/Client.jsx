import React from 'react';
import ClientItem from './ClientItem';
import { cientData } from '../constant/clientData';

const Client = () => {
	return (
		<div className='h-full md:h-screen mt-10 bg-slate-50' id='client'>
			<div className='flex flex-col justify-center max-w-5xl mx-auto space-y-6 h-full'>
				<h2 className='text-2xl font-bold text-center'>Our Clients</h2>
				<p className='font-light text-center text-xl'>
					See what our clients have to say about us.
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
					{cientData.map((item, idx) => (
						<ClientItem key={idx} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Client;
