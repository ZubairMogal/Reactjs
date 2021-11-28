   
import { Link } from "react-router-dom";
import "./post2.css";

export default function Post2({img}) {
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
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post2/abc" className="link">
            Uses of listening to music
          </Link>
        </span>
        <hr />
        <span className="postDate">16 hours ago</span>
      </div>
      <p className="postDesc">
      It is used for different celebrations like wedding, graduation, anniversaries and various kinds of parties. You can never imagine these events without melodies. It completes the spirit of celebration from start to finish.
</p>
    </div>
  );
}
