import { getIconForWeatherCode, getShortWeatherDescription } from './Functions';

export default function TimeCard({ date = "22/06", time = "12:00", temperature = 0, code, isDay = true, className = "", humidity = 0, windSpeed = 0 }) {
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

                    <div className='flex flex-row items-center gap-1.5 w-full justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267"/>
</svg>
                        {humidity}
                    </div>
                    <div className='flex flex-row items-center gap-1.5 w-full justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 fill-white' class="bi bi-wind" viewBox="0 0 16 16">
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
</svg>

                        {windSpeed}
                    </div>
                </div>
            </div>


        </div>
    );
}