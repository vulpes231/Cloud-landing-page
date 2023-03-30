import React from 'react';

import { HiArrowNarrowRight, HiTrendingUp, HiOfficeBuilding, HiSupport } from 'react-icons/hi';

import SupImg from '../assets/support.jpg'


const Contact = () => {
  return (
    <div name='contact' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={SupImg} alt="" />
        </div>
        
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='pt-8 text-slate-300 text-center'>CONTACT</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                <p className='py-4 text-3xl text-slate-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fuga rerum deleniti blanditiis sit cumque culpa dolore! Distinctio tempore modi optio quaerat omnis debitis accusamus minus dolorem ad, asperiores eum!
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>

                    <div className='p-8'>
                        <HiTrendingUp  className='w-16 h-12 bg-indigo-600 text-white rounded-lg mt-[-3.2rem] p-[-1]'/>
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur nobis beatae sint, sit nemo quas itaque cumque modi quasi.
                        </p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-3'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiArrowNarrowRight className='w-5 ml-2'/> </p>
                    </div>
                    
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>

                    <div className='p-8'>
                        <HiSupport  className='w-16 h-12 bg-indigo-600 text-white rounded-lg mt-[-3.2rem] p-[-1]'/>
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur nobis beatae sint, sit nemo quas itaque cumque modi quasi.
                        </p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-3'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiArrowNarrowRight className='w-5 ml-2'/> </p>
                    </div>
                    
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>

                    <div className='p-8'>
                        <HiOfficeBuilding  className='w-16 h-12 bg-indigo-600 text-white rounded-lg mt-[-3.2rem] p-[-1]'/>
                        <h3 className='font-bold text-2xl my-6'>Media Enquiries</h3>
                        <p className='text-gray-600 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur nobis beatae sint, sit nemo quas itaque cumque modi quasi.
                        </p>
                    </div>

                    <div className='bg-slate-100 pl-8 py-3'>
                        <p className='flex items-center text-indigo-600'>Contact Us <HiArrowNarrowRight className='w-5 ml-2'/> </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
        
    
    </div>
  )
}

export default Contact