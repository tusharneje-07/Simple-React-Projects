import { use, useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

  },[]);
  return (
    <>
      <p>
        {setUserData.currentMonthTotal}
        {setUserData.last15Days}
        {setUserData.currentStreak}
      </p>
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

  // 1️⃣ Filter current month
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentMonthTotal = contributions
    .filter(d => d.date.getMonth() === currentMonth && d.date.getFullYear() === currentYear)
    .reduce((sum, d) => sum + d.count, 0);

  // 2️⃣ Last 15 days contributions
  const last15Days = [];
  for (let i = 31; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    const match = contributions.find(d =>
      d.date.getFullYear() === day.getFullYear() &&
      d.date.getMonth() === day.getMonth() &&
      d.date.getDate() === day.getDate()
    );
    last15Days.push(match ? match.count : 0);
  }

  // 3️⃣ Current streak
  let streak = 0;
  for (let i = contributions.length - 1; i >= 0; i--) {
    const c = contributions[i];
    if (c.date > today) continue;
    if (c.count > 0) {
      streak++;
    } else {
      // If today is 0, allow that one break
      if (c.date.toDateString() === today.toDateString()) continue;
      break;
    }
  }

  return {
    currentMonthTotal,
    last15Days,
    currentStreak: streak
  };
}
