import { getIconForWeatherCode, getShortWeatherDescription } from './Functions';

export default function TimeCard({ date = "22/06", time = "12:00", temperature = 0, code, isDay = true, className = "", humidity = 0 }) {
    return (
        <div className={`duration-300 font-mono text-white cursor-pointer relative overflow-hidden w-32 h-56 rounded-3xl p-4 
  backdrop-blur-xl bg-white/10 border border-white/20 hover:scale-105 hover:shadow-lg hover:bg-white/20 ${className}`}>

            <h3 className="text-lg text-center font-sans">{date}</h3>
            <h3 className="text-sm text-center font-sans">{time}</h3>

            <div className="gap-2 relative flex flex-col items-center justify-between h-min">
                <img src={`/icons/${getIconForWeatherCode(parseInt(code), isDay)}`} alt="" className="w-20 scale-[115%]" />

                <h4 className="font-sans duration-300 text-3xl text-center absolute left-1/2 -translate-x-1/2 translate-y-[4.8rem]">
                    {parseInt(temperature)}°C
                </h4>
                <div
                    className='font-sans duration-300 text-sm text-center absolute left-1/2 -translate-x-1/2 translate-y-[8rem] w-full flex flex-row justify-center items-center gap-2'>

                    <div className='flex flex-row items-center gap-1 w-full justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='w-5 h-5 fill-white'><path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z" /></svg>
                        {humidity}
                    </div>
                    <div className='flex flex-row items-center gap-1 w-full justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='w-5 h-5 fill-white'><path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z" /></svg>
                        {humidity}
                    </div>
                </div>
            </div>


        </div>
    );
}