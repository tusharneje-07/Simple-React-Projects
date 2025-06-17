import React from 'react';
import TimeCard from './TimeCard';
import { getIconForWeatherCode, getShortWeatherDescription } from './Functions';
const Card = ({ temperature = 0, code = 0, humidity = 0, hourly_data = {}, isDay=true, className }) => {
    return (

        <div className='flex flex-col items-center justify-center gap-4'>

            <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden h-56 rounded-3xl p-4 w-56 
  backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:scale-105 hover:shadow-lg hover:bg-white/20">
                
                <div className='flex w-full flex-row justify-between'>


                <div className="flex justify-center text-center items-center align-middle rounded-xl gap-2 drop-shadow-sm backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl px-3 py-1 font-sans w-min mb-5">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='w-5 h-5 fill-white'><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    </span>
                    Pune
                </div>

                <div className="flex justify-center text-center items-center align-middle rounded-xl gap-2 drop-shadow-sm backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl px-3 py-1 font-sans w-min mb-5">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='w-5 h-5 fill-white'><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                        </svg>
                    </span>
                    {new Date().toISOString().split('T')[1].split('.')[0].substring(0,5)}
                </div>
                </div>

                {/* <h3 className="text-xl text-center">Today</h3> */}

                <div className="gap-4 relative">
                    <img src={`/icons/${getIconForWeatherCode(code, true)}`} alt="" className="w-20 scale-[120%]" />

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
                                humidity={hourly_data.relativehumidity_2m[index]}
                            />
                        ))}
                    </div>
                </div>
            </div>



        </div>


    );
}

export default Card;


