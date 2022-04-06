import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const NoPosts = () => (
  <div className="text-center p-2 bg-gray-50 rounded-xl">
    <p className="text-gray-400 font-bold">No posts</p>
  </div>
);

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const postCount = posts.length;
  const formatedPostCount = `${postCount} ${
    postCount === 1 ? "post" : "posts"
  }`;

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
      } else if (
        post.attributes?.image?.data?.attributes?.formats?.thumbnail?.url
      ) {
        props.image = `http://localhost:1337${post.attributes.image.data.attributes.formats.thumbnail.url}`;
      }

      const handleClick = () => navigate(`/post/${post.id}`);

      return <PostCard {...props} onClick={handleClick} />;
    });

  return (
    <div className="">
      {isLoading ? (
        <div className="text-center">
          <div className="Spinner"></div>
        </div>
      ) : postCount ? (
        <>
          <div>
            <p className="text-gray-400 font-bold">{formatedPostCount}</p>
          </div>
          <PostList />
        </>
      ) : (
        <NoPosts />
      )}
    </div>
  );
};

function Feed() {
  const navigate = useNavigate();

  const handleNewPostClick = () => navigate("/new");

  return (
    <div className="Feed">
      <div className="flex items-center justify-between mb-4">
        <h3 className="h3 inline-block">Feed</h3>
        <button className="btn btn--primary" onClick={handleNewPostClick}>
          New Post
        </button>
      </div>

      <Posts />
    </div>
  );
}

export default Feed;
