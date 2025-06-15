import React from 'react';

const Card = ({ temperature="Default Button", code=0, humidity=0, className }) => {
  return (
    <div className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-[#DCDFE4] w-28 h-48 dark:bg-[#22272B] rounded-3xl p-4 hover:w-56 hover:bg-blue-200 hover:dark:bg-[#0C66E4] backdrop-blur-md bg-white/30 border border-white/20 rounded-xl shadow-lg p-4">
      <h3 className="text-xl text-center">Today</h3>
      <div className="gap-4 relative">
        <img src={`/icons/${getIconForWeatherCode(code,true)}`} alt="" className="w-20 scale-[110%]" />
       
        <h4 className="font-sans duration-300 absolute left-1/2 -translate-x-1/2 translate-y-2 text-4xl text-center group-hover:-translate-x-2 group-hover:-translate-y-16 group-hover:text-5xl">
          {parseInt(temperature)}°C
        </h4>
      </div>
      <div className="absolute duration-300 -left-32 mt-2 font-sans group-hover:left-10">
        <p className="text-sm">{getShortWeatherDescription(code)}</p>
        <p className="text-sm">{humidity}% humidity</p>
      </div>
    </div>
  );
}

export default Card;


function getIconForWeatherCode(code, isDaytime) {
    if (code === 0 || code === 1) {
        return isDaytime ? "day.svg" : "night.svg";
    } else if (code === 2) {
        return isDaytime ? "cloudy-day-1.svg" : "cloudy-night-1.svg";
    } else if (code === 3) {
        return "cloudy.svg";
    } else if ([45, 48].includes(code)) {
        return "cloudy-day-3.svg";
    } else if ([51, 53, 55].includes(code)) {
        return "rainy-1.svg";
    } else if ([61, 63, 65].includes(code)) {
        return "rainy-3.svg";
    } else if ([66, 67].includes(code)) {
        return "rainy-5.svg";
    } else if ([71, 73, 75].includes(code)) {
        return "snowy-1.svg";
    } else if (code === 77) {
        return "snowy-6.svg";
    } else if ([80, 81, 82].includes(code)) {
        return "rainy-6.svg";
    } else if ([85, 86].includes(code)) {
        return "snowy-5.svg";
    } else if ([95, 96, 99].includes(code)) {
        return "thunder.svg";
    } else {
        return "weather.svg";
    }
}

function getShortWeatherDescription(code) {
    if (code === 0) {
        return "Clear sky";
    } else if (code === 1) {
        return "Mainly clear";
    } else if (code === 2) {
        return "Partly cloudy";
    } else if (code === 3) {
        return "Overcast";
    } else if (code === 45 || code === 48) {
        return "Fog";
    } else if (code === 51) {
        return "Light drizzle";
    } else if (code === 53) {
        return "Moderate drizzle";
    } else if (code === 55) {
        return "Dense drizzle";
    } else if (code === 56) {
        return "Light freezing drizzle";
    } else if (code === 57) {
        return "Dense freezing drizzle";
    } else if (code === 61) {
        return "Light rain";
    } else if (code === 63) {
        return "Moderate rain";
    } else if (code === 65) {
        return "Heavy rain";
    } else if (code === 66) {
        return "Light freezing rain";
    } else if (code === 67) {
        return "Heavy freezing rain";
    } else if (code === 71) {
        return "Light snow";
    } else if (code === 73) {
        return "Moderate snow";
    } else if (code === 75) {
        return "Heavy snow";
    } else if (code === 77) {
        return "Snow grains";
    } else if (code === 80) {
        return "Slight rain showers";
    } else if (code === 81) {
        return "Moderate rain showers";
    } else if (code === 82) {
        return "Violent rain showers";
    } else if (code === 85) {
        return "Slight snow showers";
    } else if (code === 86) {
        return "Heavy snow showers";
    } else if (code === 95) {
        return "Thunderstorm";
    } else if (code === 96) {
        return "Thunderstorm with slight hail";
    } else if (code === 99) {
        return "Thunderstorm with heavy hail";
    } else {
        return "Unknown";
    }
}


