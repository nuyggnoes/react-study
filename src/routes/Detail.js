import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setLoading(false);
    setMovieDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          backgroundImg={movieDetail.background_image}
          coverImg={movieDetail.medium_cover_image}
          title={movieDetail.title}
          rating={movieDetail.rating}
          genres={movieDetail.genres}
          description={movieDetail.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
