function MovieDetail({ backgroundImg, coverImg, title, genres, rating, description }) {
  return (
    <div>
      <img src={backgroundImg}></img>
      <img src={coverImg}></img>
      <h2>{title}</h2>
      <h4>{rating}</h4>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
      <p>{description}</p>
    </div>
  );
}
export default MovieDetail;
