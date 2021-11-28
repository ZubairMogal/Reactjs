   
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
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
              Gym
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Uses of going to Gym
          </Link>
        </span>
        <hr />
        <span className="postDate">24 hours ago</span>
      </div>
      <p className="postDesc">
      Many people hit the gym for aesthetic reasons, but there are plenty of reasons to go to the gym that don’t involve how it makes you look. Perhaps the most important of all is the fact hitting the gym is a great way to improve your heart health.
      </p>
    </div>
  );
}
