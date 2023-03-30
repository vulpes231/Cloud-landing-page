import React from 'react'

import { HiCheck } from 'react-icons/hi'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
        <div className='w-full h-[700px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl'>PRICING</h2>
                <h3 className='text-5xl font-bold py-8'>The right price for your research.</h3>
                <p className='text-3xl'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium eligendi tenetur saepe voluptas quod inventore.
                </p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <div>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <button className='w-full py-2'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$80 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <div>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex items-center py-4'><HiCheck className='w-10 mr-5 text-green-600'/> Lorem, ipsum dolor.</p>
                        <button className='w-full py-2'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing