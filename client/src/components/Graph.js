import React from 'react'
import {Chart,ArcElement} from 'chart.js';
import {Pie} from 'react-chartjs-2';

Chart.register(ArcElement);

// const data = {
//     datasets: [{
//       data: [300, 50, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)'
//       ],
//       hoverOffset: 4,
      
//     }]
//   };

  const config = {
    data : {
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            // borderRadius: 30,
            // spacing: 10
          }]
        },
        options:{
            // cutout: 10
        }
    }

export default function Graph() {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart relative">
                <Pie {...config}></Pie>
                <h1 className='mb-4 font-bold font-size: 2.5em title'>Total
                    <span className='block text- 3xl text-blue-500'>${0}</span>
                </h1>
            </div>

            <div className="flex flex-col py-10 gap-4">
                {/* labels */}
            </div>
        </div>
    </div>
  )
}
