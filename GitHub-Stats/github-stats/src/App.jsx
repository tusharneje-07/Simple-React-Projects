import { use, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chart from './components/Chat.jsx'

function App() {
  const [userData, setUserData] = useState({});
  useEffect(() => {

    fetch('https://github-contributions-api.jogruber.de/v4/tusharneje-07')
      .then(response => response.json())
      .then(data => {
        const analysis = analyzeContributions(data);
        setUserData(analysis);
        console.log(analysis);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }
      )

  }, []);
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-black/80">
        <div className='flex items-center justify-center flex-col w-full m-14 p-14'>
        <h1 className="text-xl font-bold mb-4 text-white">Last 15 Days Contributions</h1>
        <Chart dates={userData.last15Dates} counts={userData.last15Days} />
        </div>
      </div>
    </>
  )
}

export default App


function analyzeContributions(data) {
  const today = new Date();
  const contributions = data.contributions.map(entry => ({
    ...entry,
    date: new Date(entry.date),
  }));

  // 1️⃣ Current Month Total Contributions
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentMonthTotal = contributions
    .filter(d => d.date.getMonth() === currentMonth && d.date.getFullYear() === currentYear)
    .reduce((sum, d) => sum + d.count, 0);

  // 2️⃣ Last 15 Days Contributions and Dates
  const last15Days = [];
  const last15Dates = [];

  for (let i = 14; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);

    const formattedDate = day.toISOString().split("T")[0]; // YYYY-MM-DD
    last15Dates.push(formattedDate);

    const match = contributions.find(d =>
      d.date.getFullYear() === day.getFullYear() &&
      d.date.getMonth() === day.getMonth() &&
      d.date.getDate() === day.getDate()
    );
    last15Days.push(match ? match.count : 0);
  }

  // 3️⃣ Current Contribution Streak
  let streak = 0;
  for (let i = contributions.length - 1; i >= 0; i--) {
    const c = contributions[i];
    if (c.date > today) continue;
    if (c.count > 0) {
      streak++;
    } else {
      // Allow today to be 0 and continue
      if (c.date.toDateString() === today.toDateString()) continue;
      break;
    }
  }

  return {
    currentMonthTotal,
    last15Days,
    last15Dates,
    currentStreak: streak
  };
}

