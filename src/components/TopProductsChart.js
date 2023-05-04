import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function TopProductsChart() {
    const data = [
        {
            name: 'Basic Tees',
            value: 500
        },
        {
            name: 'Custom Short Pants',
            value: 300
        },
        {
            name: 'Super Hoodies',
            value: 150
        },
    ]

    const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

    return (
        <div className='w-[45%] bg-[#ffff] p-4 rounded-[20px]'>
            <div className='flex justify-between'>
                <h1 className='font-body font-extrabold'>Top products</h1>
                <select className='text-sm text-[#999999] outline-none'>
                    <option value="1">May-June 2021</option>
                    <option value="1">April-May 2021</option>
                </select>
            </div>
            <div className='h-[170px] flex items-center '>
                <ResponsiveContainer width="50%" height="100%">

                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="value" cx="35%" cy="45%" labelLine={false} outerRadius={70} fill="#8884d8" >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex flex-col gap-3 text-left'>
                <span className='flex items-center font-bold gap-2'> <p className='w-3 h-3 rounded-full bg-[#00C49F] border'> </p>Basic Tees</span>
                <span className='flex items-center font-bold gap-2'> <p className='w-3 h-3 rounded-full bg-[#FFBB28] border'> </p>Custom Short Pants</span>
                <span className='flex items-center font-bold gap-2'> <p className='w-3 h-3 rounded-full bg-[#FF8042] border'> </p>Super Hoodies</span>
                    
                </div>

            </div>
        </div>
    )
}

export default TopProductsChart
