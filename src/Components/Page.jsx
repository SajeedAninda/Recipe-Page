import React from 'react';
import Image from './Image';

const Page = () => {
    return (
        <div className='w-full bg-[#fadceb] flex justify-center items-center'>
            <div className="inner-div w-[60%] bg-white rounded-2xl h-fit p-8 my-24">
                <div className='imgDiv'>
                    <Image></Image>
                </div>

                <div className='headerTextDiv py-8 space-y-6'>
                    <h1 className='text-4xl font-bold font-youngSerif text-gray-950'>
                        Simple Omelette Recipe
                    </h1>

                    <p className='text-gray-500 font-medium font-outfit'>
                        An easy and quick dish, perfect for any meal, This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetable, or meats.
                    </p>

                    <div className='bg-[#fadceb] rounded-2xl p-6 space-y-4 font-outfit'>
                        <p className='text-[#832d7d] text-xl font-bold'>
                            Preparation Time
                        </p>

                        <ul className='list-disc ml-8 space-y-2 text-[#832d7d]'>
                            <li className='text-gray-800'><span className='font-semibold '>Total</span>: Approximately 10 minutes</li>
                            <li className='text-gray-800'><span className='font-semibold '>Preparation</span>: 5 minutes</li>
                            <li className='text-gray-800'><span className='font-semibold '>Cooking</span>: 5 minutes</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Page;