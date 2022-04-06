import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";
import PostCard from "./PostCard";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLogged } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const isAuthor = user?.id && profileUser?.id && user.id === profileUser.id;

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
      <h3 className="h3">Profile</h3>

      {profileUser ? (
        <>
          <div className="mb-4">
            <h4 className="h4">@{profileUser.username}</h4>
            <p>{profileUser.biography}</p>

            {isAuthor && <button className="btn btn--info">Edit</button>}
          </div>

          <div>
            <p className="text-gray-400 font-bold">
              {posts && posts.length} post
            </p>
          </div>
          <PostList />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
