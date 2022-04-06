import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../button/Button";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCart = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigation = useNavigate();
  return (
    <div className="movie-card select-none flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full">
      <img
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 ">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button bgColor="secondary" onClick={() => navigation(`/movie/${id}`)}>
          Watch now
        </Button>
      </div>
    </div>
  );
};

MovieCart.prototype = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      {" "}
      Something went wrong with this components
    </p>
  );
}

export default withErrorBoundary(MovieCart, {
  FallbackComponent,
});

export const MovieCartSkeleton = () => {
  return (
    <div className="movie-card select-none flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full">
      <LoadingSkeleton
        width="100%"
        heigth="250ox"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 ">
          <LoadingSkeleton width="100%" heigth="20ox"></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>
            <LoadingSkeleton width="50px" heigth="10ox"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" heigth="10ox"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton width="100%" heigth="40ox"></LoadingSkeleton>
      </div>
    </div>
  );
};
