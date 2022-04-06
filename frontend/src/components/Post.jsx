import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";
import { AuthContext } from "../context/auth";

const NotFoundPost = () => {
  return (
    <div className="NotFoundPost">
      <h4 className="h4">Post not found or deleted</h4>
    </div>
  );
};

export default function Post() {
  const { id } = useParams();
  const { jwt, user, isLogged } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const isAuthor =
    user?.username && post?.username && user.username === post.username;

  const handleRemove = async () => {
    const { data } = await axios.delete(
      `http://localhost:1337/api/posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    setPost(null);
    setError(true);

    console.log(data);
  };

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:1337/api/posts/${id}?populate=*`
        );

        console.log(data);

        const formatedPost = {
          key: data.data.id,
          content: data.data.attributes.content,
        };

        if (data.data.attributes?.user?.data?.attributes?.username) {
          formatedPost.username =
            data.data.attributes.user.data.attributes.username;
        }

        if (
          data.data.attributes?.image?.data?.attributes?.formats?.medium?.url
        ) {
          formatedPost.image = `http://localhost:1337${data.data.attributes.image.data.attributes.formats.medium.url}`;
        }
        setPost(formatedPost);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="Post">
      <h3 className="h3">Post</h3>
      {!isLoading && (
        <>
          {error ? (
            <NotFoundPost />
          ) : (
            <>
              <div className="flex items-center justify-end gap-2">
                {isAuthor && (
                  <div className="btn btn--danger" onClick={handleRemove}>
                    Remove
                  </div>
                )}

                {isLogged && !isAuthor && (
                  <div className="btn btn--primary">Like</div>
                )}
              </div>
              <PostCard {...post} />
            </>
          )}
        </>
      )}
    </div>
  );
}
