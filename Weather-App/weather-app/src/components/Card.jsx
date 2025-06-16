import React from 'react';
import TimeCard from './TimeCard';
import { getIconForWeatherCode,getShortWeatherDescription } from './Functions';
const Card = ({ temperature = 0, code = 0, humidity = 0, className }) => {
    return (

        <div className='flex flex-col items-center justify-center gap-4'>
        
        

        <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden h-48 rounded-3xl p-4 w-56 
  backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:scale-105 hover:shadow-lg hover:bg-white/20">

            <h3 className="text-xl text-center">Today</h3>

            <div className="gap-4 relative">
                <img src={`/icons/${getIconForWeatherCode(code, true)}`} alt="" className="w-20 scale-[110%]" />

                <h4 className="font-sans duration-300 absolute left-1/2 text-center -translate-x-2 -translate-y-16 text-5xl">
                    {parseInt(temperature)}°C
                </h4>
            </div>

            <div className="absolute duration-300 mt-2 font-sans left-10">
                <p className="text-sm">{getShortWeatherDescription(code)}</p>
                <p className="text-sm">{humidity}% humidity</p>
            </div>

        </div>


        {/* Uncomment this and make Hourly forcast */}
        <TimeCard time="10:00" temperature="20" code={2} />

        </div>


    );
}

export default Card;


