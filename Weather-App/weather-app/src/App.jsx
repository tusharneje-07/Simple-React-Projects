import { useEffect, useState } from 'react'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=18.51957&longitude=73.85535&current_weather=true&hourly=relativehumidity_2m,weathercode,temperature_2m")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCount(data.current_weather.temperature)
      })
      .catch((error) => console.error('Error fetching weather data:', error))

  }, [])
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900'>
        <Card temperature={count}/>
        {/* <h1 className='text-white text-2xl'>{count}</h1> */}
      </div>
    </>
  )
}

export default App
