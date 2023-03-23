import { DetailsContainer, DetailsText, DetailsTitle } from './Details.styled';

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
      <DetailsContainer>
        <img src={poster_path} alt={original_title} width="400" />
        <div>
          <DetailsTitle>
            {original_title}({release_date})
          </DetailsTitle>
          <DetailsText>User score: {vote_average}</DetailsText>
          <h2>Overview</h2>
          <DetailsText>{overview}</DetailsText>
          <h2>Genres</h2>
          <DetailsText>{genres}</DetailsText>
        </div>
      </DetailsContainer>
    </>
  );
};
