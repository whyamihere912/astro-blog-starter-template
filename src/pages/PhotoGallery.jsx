
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
