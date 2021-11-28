import Post from "../post/Post";
import Post2 from "../post2/Post2";
import Post3 from "../post3/Post3";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://panoramas.cruisecritic.com/484428/pano_f.jpg" />
      <Post2 img="https://miro.medium.com/max/1200/1*85O3ccTqsseM1nZe6R0nzw.jpeg" />
    <Post3 img="https://th.bing.com/th/id/R.9743d0f7b26ae85d4d6c2bd39ae32a59?rik=X05AafVp4NxzlA&riu=http%3a%2f%2fwww.walesartsreview.org%2fwp-content%2fuploads%2f2016%2f12%2fbest-new-releases-books.jpg&ehk=WiWJSFeRhdmnqKjQ98Ywvgm7J2AayAH9bYbsklalTHk%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
  );
}
