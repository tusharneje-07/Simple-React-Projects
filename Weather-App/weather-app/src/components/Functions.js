export function getIconForWeatherCode(code, isDaytime) {
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

export function getShortWeatherDescription(code) {
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