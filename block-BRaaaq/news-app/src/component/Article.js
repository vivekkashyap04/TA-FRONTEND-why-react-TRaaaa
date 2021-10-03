import PropTypes from 'prop-types';

function Article(props) {
  return (
    <div className="col-1">
      <h1>{props.author}</h1>
      <img src={props.urlToImage} alt="img" className="image" />
      <p>{props.content}</p>
    </div>
  );
}

Article.prototype = {
  author:PropTypes.string.isRequired,
  urlToImage:PropTypes.string.isRequired,
  content:PropTypes.string.isRequired
}

export default Article;
