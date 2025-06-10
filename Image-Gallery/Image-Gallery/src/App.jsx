import { useState } from 'react'

import './App.css'
import ImageGallery from './Component/ImageGallery'

function App() {
  const [count, setCount] = useState(0)
  const sampleImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
  "https://images.unsplash.com/photo-1532009324734-20a7a5813719",
  "https://images.unsplash.com/photo-1532009324734-20a7a5813719",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
  "https://images.unsplash.com/photo-1524429656589-6633a470097c",
];

  return (
    <>
      <div className="min-h-screen bg-black/80">
      <ImageGallery imageUrls={sampleImages} />
    </div>
    </>
  )
}

export default App
