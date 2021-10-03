function Article(props) {
  return (
    <div className="col-1">
      <h1>{props.author}</h1>
      <img src={props.urlToImage} alt="img" className="image" />
    </div>
  );
}

export default Article;
