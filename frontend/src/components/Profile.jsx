import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";
import PostCard from "./PostCard";

const NotFoundProfile = () => {
  return (
    <div className="NotFoundPost">
      <h4 className="h4">Profile not found or deleted</h4>
    </div>
  );
};

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLogged } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const isAuthor = user?.id && profileUser?.id && user.id === profileUser.id;
  const postCount = posts.length;
  const formatedPostCount = `${postCount} ${
    postCount === 1 ? "post" : "posts"
  }`;

  const PostList = () =>
    posts.map((post) => {
      console.log(post);
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
      console.log(props);

      const handleClick = () => navigate(`/post/${post.id}`);

      return <PostCard {...props} onClick={handleClick} />;
    });

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await axios.get(
          `http://localhost:1337/api/users/${id}`
        );
        const { data: postsData } = await axios.get(
          `http://localhost:1337/api/posts?filters[user]=${id}&populate=*`
        );

        console.log("data", data);
        console.log("postsData", postsData);
        console.log("profileUser", data.data);
        setProfileUser(data);
        setPosts(postsData.data);
      } else {
        if (isLogged) {
          const { data: postsData } = await axios.get(
            `http://localhost:1337/api/posts?filters[user]=${user.id}&populate=*`
          );

          console.log("posts", postsData);
          setProfileUser(user);
          setPosts(postsData.data);
        } else {
          navigate("/login/sign-in");
        }
      }
    })();
    console.log(id);
    console.log("user", user);
  }, []);

  return (
    <div className="Profile">
      <div className="flex items-center justify-between">
        <h3 className="h3 inline-block">Profile</h3>
        {isAuthor && <button className="btn btn--info">Edit</button>}
      </div>

      {profileUser ? (
        <>
          <div className="mb-4">
            <h4 className="h4">@{profileUser.username}</h4>
            <p>{profileUser.biography}</p>
          </div>

          <div>
            <p className="text-gray-400 font-bold">{formatedPostCount}</p>
          </div>
          <PostList />
        </>
      ) : (
        <NotFoundProfile />
      )}
    </div>
  );
}
