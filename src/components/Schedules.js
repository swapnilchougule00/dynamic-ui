import React from 'react'

function Schedules() {
    return (
        <div className='md:w-[45%] w-full bg-[#ffff] p-4 rounded-[20px]'>
            <div className='flex justify-between'>
                <h1 className='font-body font-extrabold'>Today’s schedule</h1>
                <button className='text-[#858585] flex items-center justify-center gap-1 text-sm'>See all <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585" />
                </svg></button>
            </div>
            <div className='border-l-4 p-2 mt-2 border-[#9BDD7C]'>
                <h1 className='text-[#666666] text-sm'>Meeting with suppliers from Kuta Bali</h1>
                <h1 className='text-[#999999] text-sm'>14.00-15.00</h1>
                <h1 className='text-[#999999] text-sm'>at Sunset Road, Kuta, Bali </h1>
            </div>
            <div className='border-l-4 p-2 mt-2 border-[#6972C3]'>
                <h1 className='text-[#666666] text-sm'>Check operation at Giga Factory 1</h1>
                <h1 className='text-[#999999] text-sm'>18.00-20.00</h1>
                <h1 className='text-[#999999] text-sm'>at Central Jakarta </h1>
            </div>
        </div>
    )
}

export default Schedules
