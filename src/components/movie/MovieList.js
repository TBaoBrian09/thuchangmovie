import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCart, { MovieCartSkeleton } from "./MovieCart";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;

  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {!isLoading && (
        <>
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCartSkeleton></MovieCartSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCartSkeleton></MovieCartSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCartSkeleton></MovieCartSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCartSkeleton></MovieCartSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCartSkeleton></MovieCartSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.prototype = {
  type: PropTypes.string.isRequired,
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      {" "}
      Something went wrong with this components
    </p>
  );
}

export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
