import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer , CartesianGrid, Tooltip } from 'recharts';

function ActivitiesChart() {

    const data = [
        {
            name: 'Week 1',
            Guest: 200,
            User: 100
        },
        {
            name: 'Week 2',
            Guest: 300,
            User: 400
        },
        {
            name: 'Week 3',
            Guest: 200,
            User: 100
        },
        {
            name: 'Week 3',
            Guest: 350,
            User: 400
        }
      
      
    ]

    return (
        <div className='w-full overflow-x-scroll md:overflow-hidden p-2 px-4 bg-white mt-3 rounded-[20px] '>
            <div className='flex justify-between px-2'>
                <div>
                    <h1 className='font-body font-extrabold ml-2'>Activities</h1>
                    <select className='text-sm text-[#999999] outline-none'>
                        <option value="1">May-June 2021</option>
                        <option value="1">April-May 2021</option>
                    </select>
                </div>
                <div className='flex gap-4'>
                    <span className='flex items-center gap-2'> <p className='w-2 h-2 rounded-full bg-[#E9A0A0] border'> </p> Guest</span>
                    <span className='flex items-center gap-2'> <p className='w-2 h-2 rounded-full bg-[#9BDD7C] border'> </p> User</span>
                </div>
            </div>
            <div className="mt-3 w-full text-xs">
                <ResponsiveContainer width='100%' height={350}>

                <LineChart  className="w-full h-auto" data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5, }} >
                    <CartesianGrid  />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone"  dataKey="Guest" stroke="#E9A0A0" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ActivitiesChart
