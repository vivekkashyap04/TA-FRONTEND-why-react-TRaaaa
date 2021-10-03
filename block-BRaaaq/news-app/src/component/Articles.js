import Article from './Article';
import data from './data';

function Articles() {
  console.log(data);
  return (
    <div className="flex-wrap">
      {data.map((article, index) => {
        return <Article key={index} {...article} className="col-1" />;
      })}
    </div>
  );
}

export default Articles;
