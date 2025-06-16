import { getIconForWeatherCode,getShortWeatherDescription } from './Functions';

export default function TimeCard({ date="22/06", time="12:00", temperature=0, code, className="" }) {
    return (
        <div className={`duration-300 font-mono text-white cursor-pointer relative overflow-hidden w-32 h-48 rounded-3xl p-4 
  backdrop-blur-xl bg-white/10 border border-white/20 hover:scale-105 hover:shadow-lg hover:bg-white/20 ${className}`}>

            <h3 className="text-lg text-center font-sans">{date}</h3>
            <h3 className="text-sm text-center font-sans">{time}</h3>

            <div className="gap-2 relative flex flex-col items-center justify-between h-min">
                <img src={`/icons/${getIconForWeatherCode(parseInt(code), true)}`} alt="" className="w-20 scale-[115%]" />

                <h4 className="font-sans duration-300 text-3xl text-center absolute left-1/2 -translate-x-1/2 translate-y-[4.8rem]">
                    {parseInt(temperature)}°C
                </h4>
            </div>


        </div>
    );
}