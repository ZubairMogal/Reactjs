   
import { Link } from "react-router-dom";
import "./post3.css";

export default function Post3({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Book
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post3/abc" className="link">
            Uses of reading Books
          </Link>
        </span>
        <hr />
        <span className="postDate">18 hours ago</span>
      </div>
      <p className="postDesc">
      People who read books live for around two years longer than those who don’t, irrespective of gender, wealth, education or health. Deep reading promotes empathy and emotional intelligence - cognitive processes that can lead to greater chance of survival.</p>
    </div>
  );
}
