import React from 'react';
import SideBar from '../components/SideBar';
import DashBoardStats from '../components/DashBoardStats';
import user from '../images/blank-user-img.jpg';
import ActivitiesChart from '../components/ActivitiesChart';
import Schedules from '../components/Schedules';
import TopProductsChart from '../components/TopProductsChart';

function DashBoard() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#DDDDDD] space-x-4 md:p-3">
        <SideBar />
      <div className="p-2 w-full overflow-y-scroll scrollbar-hidden">
        <div className="flex justify-between gap-1 items-center">
          <h1 className="font-body text-xl font-extrabold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 rounded-[14px] text-sm outline-none w-[180px] h-[25px]"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <img
              src={user}
              className="w-7 cursor-pointer rounded-full"
              alt=""
            />
          </div>
        </div>
        <DashBoardStats />
        <div className="">
          <ActivitiesChart />
          <div className="mt-3 flex flex-wrap gap-2 justify-between">
            <TopProductsChart />
            <Schedules />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
