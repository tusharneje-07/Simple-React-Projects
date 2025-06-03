import { useState, useEffect } from 'react'
import { DatePicker } from 'antd'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [diff, setDiff] = useState('Select a date to calculate age difference')

  // Function to calculate difference
  const calculateDifference = (birthDate, now = new Date()) => {
    let years = now.getFullYear() - birthDate.getFullYear()
    let months = now.getMonth() - birthDate.getMonth()
    let days = now.getDate() - birthDate.getDate()
    let hours = now.getHours() - birthDate.getHours()
    let minutes = now.getMinutes() - birthDate.getMinutes()
    let seconds = now.getSeconds() - birthDate.getSeconds()

    if (seconds < 0) {
      seconds += 60
      minutes--
    }
    if (minutes < 0) {
      minutes += 60
      hours--
    }
    if (hours < 0) {
      hours += 24
      days--
    }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0)
      days += previousMonth.getDate()
      months--
    }
    if (months < 0) {
      months += 12
      years--
    }

    return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  }

  useEffect(() => {
    if (!selectedDate) return

    const interval = setInterval(() => {
      const birthDate = selectedDate.toDate()
      const now = new Date()
      const diffString = calculateDifference(birthDate, now)
      setDiff(diffString)
    }, 1000)

    // Cleanup interval on unmount or if selectedDate changes
    return () => clearInterval(interval)
  }, [selectedDate])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black/80">
      <div className="flex flex-col items-center bg-gray-500 rounded-lg p-4">
        <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          className="rounded-lg mb-4"
          onChange={(value) => setSelectedDate(value)}
        />
        <div className="text-white text-2xl font-semibold">{diff}</div>
      </div>
    </div>
  )
}

export default App
