export const Details = ({ movieDetails }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;
  return (
    <>
      <div>
        <img src={poster_path} alt={original_title} />
        <div>
          <h2>
            {original_title}({release_date})
          </h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
    </>
  );
};
