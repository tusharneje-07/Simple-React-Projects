# 💱 Currency Converter Web App

A simple and user-friendly currency converter web application that lets you convert between different currencies using real-time exchange rates powered by the free [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api).


## 🧰 Tech Stack

- HTML5
- TailwindCSS 3
- JavaScript (React)
- [Fawaz Ahmed Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies)

## 📦 Features

- Convert between any two currencies.
- Realtime exchange rate fetched from API.
- Clean and intuitive UI.
- Swap currencies with one click.
- Responsive and accessible layout.

## 📸 Screenshot

![Currency Converter UI](./ss.png)

## 🔗 API Used

This project uses the open-source Fawaz Ahmed Currency API:


[https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base}.json](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base}.json)


Example (USD to INR):

[https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json)


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
````

### 2. Install Packages
```npm
npm i
```
or
```npm
npm install
```
### 3. Run Server
```npm
npm run dev
```

## 🔄 How It Works

1. User inputs an amount and selects source and target currencies.
2. On clicking **Convert**, a request is made to the Fawaz API to fetch the exchange rate.
3. The equivalent value is calculated and shown.
4. Swap button reverses the currency selections for quick toggle.


## 🙏 Acknowledgements

* [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api)
* [jsDelivr CDN](https://www.jsdelivr.com/)
* [Chai aur React by Hitesh Choudhary (Chai aur Code)](https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=MKhyRZx-JrS40cVQ) – for a clear and beginner-friendly React course that inspired parts of this UI and project structure.
