import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import PostCard from "./PostCard";
import Spinner from "./Spinner";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        "http://localhost:1337/api/posts?populate=*&pagination[limit]=9999"
      );
      setIsLoading(false);
      setPosts([...data.data]);

      console.log(data);
    })();
  }, []);

  const PostList = () =>
    posts.map((post) => {
      const props = {
        key: post.id,
        content: post.attributes.content,
      };

      if (post.attributes?.user?.data?.attributes?.username) {
        props.username = post.attributes.user.data.attributes.username;
      }

      if (post.attributes?.image?.data?.attributes?.formats?.medium?.url) {
        props.image = `http://localhost:1337${post.attributes.image.data.attributes.formats.medium.url}`;
      }

      const handleClick = () => navigate(`/post/${post.id}`);

      return <PostCard {...props} onClick={handleClick} />;
    });

  return <div>{isLoading ? <Spinner /> : <PostList />}</div>;
};

function Feed() {
  const navigate = useNavigate();

  const handleNewPostClick = () => navigate("/new");

  return (
    <div className="Feed">
      <h3 className="h3">Feed</h3>

      <div className="text-right" onClick={handleNewPostClick}>
        <button className="btn btn--primary">New Post</button>
      </div>
      <Posts />
    </div>
  );
}

export default Feed;
