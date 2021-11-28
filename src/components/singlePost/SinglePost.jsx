import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://panoramas.cruisecritic.com/484428/pano_f.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Uses of going to Gym
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
         
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Zubair">
                Zubair Ahmed
              </Link>
            </b>
          </span>
          <span>1 month ago</span>
        </div>
        <p className="singlePostDesc">
        Many people hit the gym for aesthetic reasons, but there are plenty of reasons to go to the gym that don’t involve how it makes you look. Perhaps the most important of all is the fact hitting the gym is a great way to improve your heart health.
          <br />
          <br />
        When you exercise, your body becomes more sensitive to insulin, which lowers your overall blood glucose and helps your body use carbohydrates for energy. Everyone has a different physical structure and their physical needs, so it is very important to consider why your body needs a gym. This becomes more important for teenagers, as their body is developing at that time and workouts in the gym affect their anatomy.
        </p>
      </div>
    </div>
  );
}