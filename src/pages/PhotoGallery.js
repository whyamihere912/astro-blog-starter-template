```jsx
// PhotoGallery.js

import React, { useState, useEffect } from 'react';
import photosData from './photos.json';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(photosData);
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo.url} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
```

```json
// photos.json

[
  {
    "url": "path/to/photo1.jpg",
    "title": "Photo 1"
  },
  {
    "url": "path/to/photo2.jpg",
    "title": "Photo 2"
  },
  ...
]
```

```css
/* PhotoGallery.css */

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.photo-item {
  img {
    max-width: 100%;
    border-radius: 8px;
  }
  
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }
}
