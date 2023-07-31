import { useState } from 'react'
import GalleryItem from './GalleryItem'
export default function Gallery() {
    let [items, setItems] = useState(
        {
            images: [
              "https://www.northernbrewer.com/cdn/shop/products/43407-crystallized-citrus_blackberry_1c0e8c6c-340f-4228-9655-b659d482524c_1024x1024.jpg?v=1610743085",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/f/f6/Cherry_season_%2848216568227%29.jpg"
            ],
            currentImg: 0
        }
    )
    function prev() {
        let newItems = {...items}
        if (newItems.currentImg === 0) {
            newItems.currentImg = newItems.images.length - 1
        } else {
            newItems.currentImg -= 1
        }
        setItems(newItems)
    }
    function next() {
        let newItems = {...items}
        if (newItems.currentImg === newItems.images.length - 1) {
            newItems.currentImg = 0
        } else {
            newItems.currentImg += 1
        }
        setItems(newItems)
    }
    return (
        <div className="gallery">
            <GalleryItem src = {items.images[items.currentImg]} />
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
        </div>
    );
  }