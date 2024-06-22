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

                        <ul className='list-disc ml-8 space-y-2 text-[#7B284F]'>
                            <li className='text-[#57574E]'><span className='font-semibold '>Total</span>: Approximately 10 minutes</li>
                            <li className='text-[#57574E]'><span className='font-semibold '>Preparation</span>: 5 minutes</li>
                            <li className='text-[#57574E]'><span className='font-semibold '>Cooking</span>: 5 minutes</li>
                        </ul>
                    </div>
                </div>


                <div className="ingredientsSection border-b border-gray-300 pb-6 space-y-4">
                    <h1 className='text-2xl font-semibold font-youngSerif text-[#854632]'>
                        Ingredients
                    </h1>

                    <ul className='list-disc ml-8 space-y-2 text-amber-950 font-outfit'>
                        <li className='text-[#57574E]'>2-3 large eggs</li>
                        <li className='text-[#57574E]'>Salt, to taste</li>
                        <li className='text-[#57574E]'>Pepper, to taste</li>
                        <li className='text-[#57574E]'>1 tablespoon of butter or oil</li>
                        <li className='text-[#57574E]'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                </div>

                <div className="instructionSection border-b border-gray-300 pt-6 pb-6 space-y-4">
                    <h1 className='text-2xl font-semibold font-youngSerif text-[#854632]'>
                        Instructions
                    </h1>

                    <ul className='list-decimal ml-8 space-y-2 text-[#854632] font-outfit'>
                        <li className='text-[#57574E]'><span className='font-semibold '>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
                        <li className='text-[#57574E]'><span className='font-semibold '>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                        <li className='text-[#57574E]'><span className='font-semibold '>Cook the Omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                        </li>
                        <li className='text-[#57574E]'><span className='font-semibold '>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                        </li>
                        <li className='text-[#57574E]'><span className='font-semibold '>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                        </li>
                        <li className='text-[#57574E]'><span className='font-semibold '>Enjoy</span>: Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Page;