import { useEffect, useState } from 'react'
import Card from './components/Card'


function App() {
  const [temp, setTemp] = useState(0)
  const [code, setCode] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [hourly_data, setHourly_data] = useState({})
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=18.51957&longitude=73.85535&current_weather=true&hourly=relativehumidity_2m,weathercode,temperature_2m")
      .then((response) => response.json())
      .then((data) => {
        setTemp(data.current_weather.temperature)
        setCode(data.current_weather.weathercode)
        setHumidity(getCurrentHumidity(data.hourly))
        setHourly_data({
          time: data.hourly.time,
          temperature_2m: data.hourly.temperature_2m,
          weathercode: data.hourly.weathercode,
          relativehumidity_2m: data.hourly.relativehumidity_2m
        })
      })
      .catch((error) => console.error('Error fetching weather data:', error))

  }, [])
  return (
    <>
      <div className='flex w-full flex-row justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen'>
        <Card temperature={temp} code={code} humidity={humidity} hourly_data={hourly_data}/>
      </div>
    </>
  )
}

export default App


function getCurrentHumidity(hourlyData) {
    // Get current date and hour in format 'YYYY-MM-DDTHH:00'
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    
    const currentTimeString = `${year}-${month}-${day}T${hour}:00`;

    // Find index of current time
    const index = hourlyData.time.indexOf(currentTimeString);
    
    if (index === -1) {
        console.warn("Current time not found in data");
        return null;
    }

    // Return the humidity value
    return hourlyData.relativehumidity_2m[index];
}