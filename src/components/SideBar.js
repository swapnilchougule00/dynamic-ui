import React, { useState } from 'react';
import dashboard from '../images/dashboard_icon.png';
import schedule from '../images/schedule_icon.png';
import transaction from '../images/transaction_icon.png';
import user from '../images/user_icon.png';
import settings from '../images/setting_icon.png';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sideKeys = [
    { name: 'Dashboard', img: dashboard },
    { name: 'Transactions', img: transaction },
    { name: 'Schedules', img: schedule },
    { name: 'Users', img: user },
    { name: 'Settings', img: settings },
  ];

  return (
    <>
      <div className="bg-[#000000] rounded-[30px] md:hidden flex items-center justify-between px-5 py-3">
        <h1 className="font-body text-white text-2xl font-bold">Board.</h1>
        <button className="text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:w-[17%] md:h-[100%] p-10 bg-[#000000] rounded-[30px]`}>
        <div className="space-y-8">
          <h1 className="font-body text-white text-4xl font-bold">Board.</h1>
          <div className="font-body text-[17px] flex flex-col items-start space-y-6 tracking-wider text-[#ffffff]">
            {sideKeys.map((btn) => (
              <button key={btn.name} className="flex gap-2 items-center hover:bg-gray-800 p-2 hover:rounded-2xl">
                <img src={btn.img} alt="" /> {btn.name}
              </button>
            ))}
          </div>
        <div className="font-body text-[14px] flex flex-col items-start space-y-2 tracking-wider text-[#ffffff]/80">
          <button>Help</button>
          <button>Contact</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
