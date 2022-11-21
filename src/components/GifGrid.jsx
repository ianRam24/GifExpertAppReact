import { useFetchGifs } from '../hooks/useFetchGifs';
import GifCard from './GifCard';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && 'cargando'}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifCard key={id} title={title} image={url} />
        ))}
      </div>
    </>
  );
};
