import { feautureData } from '../constant/FeautureData';

import FeautureCard from './FeautureCard';
import SaleCard from './SaleCard';

const Sale = () => {
	return (
		<div
			className='h-full md:h-screen bg-gradient-to-b from-slate-100 to-slate-100 px-10'
			id='sale'
		>
			<div className='flex flex-col justify-center max-w-5xl mx-auto space-y-6 h-full'>
				<h2 className='text-2xl font-bold'>
					On Sale <span className='text-orange-900'>Properties</span>
				</h2>
				<p className='font-light'>
					We offer a wide selection of on-sale properties that cater to
					different preferences and budgets. Here are some of our featured
					properties:
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
					{feautureData.map((item, idx) => (
						<SaleCard key={idx} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Sale;
