import { use, useState, useEffect } from 'react'
import './App.css'
import Chart from './components/Chat.jsx'

function App() {
  const [userData, setUserData] = useState({});
  const [profileURL, setProfileURL] = useState('');
  useEffect(() => {
    fetch('https://api.github.com/users/tusharneje-07')
    .then(response => response.json())
    .then(data => {
      setProfileURL(data.avatar_url);
    })
    fetch('https://github-contributions-api.jogruber.de/v4/tusharneje-07')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const analysis = analyzeContributions(data);
        setUserData(analysis);
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
        <div className="flex flex-row justify-start w-full mb-4 bg-red-400 p-3 text-left align-top items-start">
          <div className='w-48 h-48 bg-white rounded-full flex items-center justify-center'>
            <img src={profileURL} alt="" />
          </div>
          <div className='ml-4 bg-green-400 justify-start items-start align-top flex w-max flex-col'>
            <h2 className="text-2xl font-bold text-white">tusharneje-07</h2>
            <p className="text-lg text-white">Current Month Contributions: {userData.currentMonthTotal || 0}</p>
            <p className="text-lg text-white">Current Streak: {userData.currentStreak || 0} days</p>
          </div>
        </div>
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

