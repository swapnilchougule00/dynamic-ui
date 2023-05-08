import React from 'react'
import dashboard from '../images/dashboard_icon.png'
import schedule from '../images/schedule_icon.png'
import transaction from '../images/transaction_icon.png'
import user from '../images/user_icon.png'
import settings from '../images/setting_icon.png'
function SideBar() {
    const sideKeys = [
        {name:'Dashboard',
            img:dashboard},

        {name:'Transactions',
            img:transaction},

        {name:'Schedules',
            img:schedule},

        {name:'Users',
            img:user},

        {name:'Settings',
            img:settings}
                    ]
  return (
    <div className='w-[17%]  h-[100%]  p-10 flex flex-col justify-between bg-[#000000] rounded-[30px]'>

    <div className='space-y-8'>
        <h1 className=" font-body text-white text-4xl font-bold ">
            Board.
        </h1>

        <div className='font-body text-[17px] flex flex-col  items-start space-y-6 tracking-wider text-[#ffffff]'>
            {sideKeys.map((btn)=>
            <button className='flex gap-2 items-center'> <img src={btn.img} alt="" />  {btn.name}</button>
            )}
        </div>
    </div>

    <div className='font-body text-[14px] flex flex-col items-start space-y-2  tracking-wider text-[#ffffff]/80'>
        <button>Help</button>
        <button >Contact</button>
    </div>
</div>
  )
}

export default SideBar
