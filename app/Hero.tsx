'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

type Props = {
  movies: Movie[];
};

const Hero = ({ movies }: Props) => {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <div className="h-vh">
      <h4 className="font-bold text-lg uppercase p-10">Upcoming</h4>
      <div ref={sliderRef} className="keen-slider">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="keen-slider__slide number-slide1 h-[700px] shadow-xl rounded-md"
          >
            <Link
              href={{
                pathname: '/movie/',
                query: {
                  movie: Object.entries(movie)
                    .map(([key, value]) => `${key}=${value}`)
                    .join('&'),
                },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="poster"
                className="h-full w-full object-fill rounded-t-lg shadow-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
