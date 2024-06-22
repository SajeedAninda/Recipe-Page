import React from 'react';
import Image from './Image';

const Page = () => {
    return (
        <div className='w-full bg-[#fadceb] h-screen flex justify-center items-center'>
            <div className="inner-div w-[60%] bg-white rounded-2xl h-fit p-8">
                <div className='imgDiv'>
                    <Image></Image>
                </div>

                <div className='headerTextDiv'>
                    
                </div>
            </div>
        </div>
    );
};

export default Page;