import { useState } from 'react'

import './App.css'
import ImageGallery from './Component/ImageGallery'

function App() {
  const [count, setCount] = useState(0)
  const sampleImages = [
  "https://source.unsplash.com/random/300x300",
  "https://source.unsplash.com/random/300x400",
  "https://source.unsplash.com/random/300x500",
  "https://source.unsplash.com/random/400x300",
  "https://source.unsplash.com/random/500x300",
  "https://source.unsplash.com/random/600x400",
  "https://source.unsplash.com/random/400x500",
];
  return (
    <>
      <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center p-6">Pinterest Style Gallery</h1>
      <ImageGallery imageUrls={sampleImages} />
    </div>
    </>
  )
}

export default App
