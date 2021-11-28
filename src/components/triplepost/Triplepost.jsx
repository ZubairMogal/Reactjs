import { Link } from "react-router-dom";
import "./triplepost.css";

export default function Triplepost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://th.bing.com/th/id/R.9743d0f7b26ae85d4d6c2bd39ae32a59?rik=X05AafVp4NxzlA&riu=http%3a%2f%2fwww.walesartsreview.org%2fwp-content%2fuploads%2f2016%2f12%2fbest-new-releases-books.jpg&ehk=WiWJSFeRhdmnqKjQ98Ywvgm7J2AayAH9bYbsklalTHk%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <h1 className="singlePostTitle">
          Uses of reading Books
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
          <span>5 months ago</span>
        </div>
        <p className="singlePostDesc">
        Regular reading can be great for learning more about your world. As you read books, you will come across more and more new ideas and facts. When you read books, you’ll always have something new and interesting to talk about with others. And you don’t even have to start the conversation. You’ll find that people you are talking to will mention a book or story and you’ll be able to talk with them about it. If you hadn’t read the book, you wouldn’t be able to engage in the conversation – and you may miss out on making a new friend!

<br />
          <br />
          Wisdom is about being able to think, act and speak with clear and profound insights into topics.

Wise people are people who have had a lot of experiences and have thought in a lot of depth about life.

Fortunately, reading books can give you wisdom over time. That’s because you’ll read about other people’s experiences and insights and you’ll be able to learn from their wisdom.
        </p>
      </div>
    </div>
  );
}