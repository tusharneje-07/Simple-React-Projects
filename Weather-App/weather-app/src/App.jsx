import { useEffect, useState } from 'react'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(0)
  const [humidity, setHumidity] = useState(0)
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=18.51957&longitude=73.85535&current_weather=true&hourly=relativehumidity_2m,weathercode,temperature_2m")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCount(data.current_weather.temperature)
        setCode(data.current_weather.weathercode)
        setHumidity(getCurrentHumidity(data.hourly))
      })
      .catch((error) => console.error('Error fetching weather data:', error))

  }, [])
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900'>
        <Card temperature={count} code={code} humidity={humidity}/>
        {/* <h1 className='text-white text-2xl'>{count}</h1> */}
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