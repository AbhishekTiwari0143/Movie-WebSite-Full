import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  useAddMovieReviewMutation,
  useGetSpecificMovieQuery,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: movieId,
        rating,
        comment,
      }).unwrap();
      refetch();

      toast.success("Review created successfull");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  return (
    <>
      <div className="MovieDetails mt-[2rem] mb-40">
        <div className="mb-4">
          <Link
            to="/"
            className="text-white font-semibold hover:underline ml-[4rem] sm:ml-[20rem]"
          >
            Go Back
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={movie?.image}
            alt={movie?.name}
            className="w-[80%] sm:w-[20%] rounded"
          />
        </div>
        {/* Container one  */}
        <div className="container w-[80%] md:w-full flex justify-between flex-col md:flex-row mt-[3rem] ml-4 md:ml-16">
          <section>
            <h2 className="text-4xl md:text-5xl my-4 font-extrabold">
              {movie?.name}
            </h2>
            <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem]  text-[#B0B0B0]">
              {movie?.detail}
            </p>
          </section>
          <div className="mr-[5rem]">
            <p className="text-2xl font-semibold">
              Releasing Date: {movie?.year}
            </p>

            <div>
              {movie?.cast.map((c) => (
                <ul key={c._id}>
                  <li className="mt-[1rem]">{c}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="container items-center w-[80%] m-auto ml-4 md:ml-16">
          <MovieTabs
            loadingMovieReview={loadingMovieReview}
            userInfo={userInfo}
            submitHandler={submitHandler}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            movie={movie}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
