import express from 'express';
import fetch from 'node-fetch';
import fs from 'fs';
import puppeteer from 'puppeteer';

const app = express();

function analyzeContributions(data) {
  const today = new Date();
  const contributions = data.contributions.map(entry => ({
    ...entry,
    date: new Date(entry.date),
  }));

  const last15Days = [];
  const last15Dates = [];

  for (let i = 14; i >= 0; i--) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);

    const formattedDate = day.toISOString().split("T")[0];
    last15Dates.push(formattedDate);

    const match = contributions.find(d =>
      d.date.getFullYear() === day.getFullYear() &&
      d.date.getMonth() === day.getMonth() &&
      d.date.getDate() === day.getDate()
    );
    last15Days.push(match ? match.count : 0);
  }

  return {
    dates: last15Dates,
    counts: last15Days
  };
}

app.get('/chart/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
    const data = await response.json();

    const { dates, counts } = analyzeContributions(data);

    const htmlTemplate = fs.readFileSync('./chart-template.html', 'utf8');
    const finalHTML = htmlTemplate
      .replace('{{LABELS}}', JSON.stringify(dates))
      .replace('{{DATA}}', JSON.stringify(counts));

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.setContent(finalHTML, { waitUntil: 'networkidle0' });

    const chart = await page.$('canvas');
    const image = await chart.screenshot({ type: 'png' });

    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.send(image);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to generate chart.');
  }
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000/chart/<github-username>');
});
