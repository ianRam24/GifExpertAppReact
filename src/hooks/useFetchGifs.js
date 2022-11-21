import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/fetchGIfs';

export function useFetchGifs(category) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return {
    images,
    isLoading,
  };
}
