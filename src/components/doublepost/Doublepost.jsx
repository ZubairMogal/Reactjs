import { Link } from "react-router-dom";
import "./doublepost.css";

export default function Doublepost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://miro.medium.com/max/1200/1*85O3ccTqsseM1nZe6R0nzw.jpeg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Uses of listening to music
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
          <span>2 months ago</span>
        </div>
        <p className="singlePostDesc">
        We use music as a way to distract ourselves in stressful situations. It helps us escape a situation and comfort us. Some of us use music to improve our concentration and focus while studying or working. This includes streamlining attention, buffering against sensory inputs, changing the sensory landscape, etc. Music helps us express ourselves and develop an identity. This extends to a social identity shared by a larger group of people too (subcultures, genre-fans, musicians, etc.). It works as a social glue and a tether between people.          <br />
          <br />
          According to a study, people who listened to Mozart’s music showed an increase in brain wave activity that’s linked directly to memory. To get your creative juices flowing, listen to some classical music. While listening to classical music won’t instantly make you creative, it will help put into a more creative mindset. Scientists claim that classical music’s tempo is similar to the human heart, which eases both anxiety and depression.
        </p>
      </div>
    </div>
  );
}