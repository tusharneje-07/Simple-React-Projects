import { getIconForWeatherCode,getShortWeatherDescription } from './Functions';

export default function TimeCard({ date="22/06", time="12:00", temperature=0, code }) {
    return (
        <div className="duration-300 font-mono text-white cursor-pointer relative overflow-hidden w-28 h-48 rounded-3xl p-4 
  backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:scale-105 hover:shadow-lg hover:bg-white/20">

            <h3 className="text-lg text-center font-sans">{date}</h3>
            <h3 className="text-sm text-center font-sans">{time}</h3>

            <div className="gap-4 relative">
                <img src={`/icons/${getIconForWeatherCode(code, true)}`} alt="" className="w-20 scale-[105%]" />

                <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 -translate-y-2 text-3xl text-center">
                    {parseInt(temperature)}°C
                </h4>
            </div>


        </div>
    );
}