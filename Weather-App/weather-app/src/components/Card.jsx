import React from 'react';
import TimeCard from './TimeCard';
import { getIconForWeatherCode, getShortWeatherDescription } from './Functions';
const Card = ({ temperature = 0, code = 0, humidity = 0, hourly_data = {}, isDay=true, className }) => {
    return (

        <div className='flex flex-col items-center justify-center gap-4'>

            <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden h-48 rounded-3xl p-4 w-56 
  backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:scale-105 hover:shadow-lg hover:bg-white/20">

                <h3 className="text-xl text-center">Today</h3>

                <div className="gap-4 relative">
                    <img src={`/icons/${getIconForWeatherCode(code, true)}`} alt="" className="w-20 scale-[110%]" />

                    {document.getElementById('web-icon')?.setAttribute('href', `/icons/${getIconForWeatherCode(code, isDay)}`)}

                    <h4 className="font-sans duration-300 absolute left-1/2 text-center -translate-x-2 -translate-y-16 text-5xl">
                        {parseInt(temperature)}°C
                    </h4>
                </div>

                <div className="absolute duration-300 mt-2 font-sans left-10">
                    <p className="text-sm">{getShortWeatherDescription(code)}</p>
                    <p className="text-sm">{humidity}% humidity</p>
                </div>

            </div>

            <div className='w-screen flex'>
                <div className='overflow-x-auto'>
                    <div className='flex flex-row items-center gap-4 min-w-max p-4'>
                        {Object.keys(hourly_data).length > 0 && hourly_data.time.map((time, index) => (
                            <TimeCard
                                key={index}
                                date={time.split('T')[0].split('-').reverse().join('/')}
                                time={time.split('T')[1].slice(0, 5)}
                                temperature={hourly_data.temperature_2m[index]}
                                code={hourly_data.weathercode[index]}
                                isDay={new Date(time).getHours() >= 6 && new Date(time).getHours() < 18 ? true : false}
                                className="flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>



        </div>


    );
}

export default Card;


