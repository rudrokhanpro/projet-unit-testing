import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth";

const Form = () => {
  const navigate = useNavigate();
  const { jwt, user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const isDisabled = !content || isLoading;

  const handleContentChange = ({ target: { value } }) => setContent(value);
  const handleImageChange = ({ target: { files } }) => {
    console.log(files);
    setImage(files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "multipart/form-data",
    };

    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          content,
          user: user.id,
        })
      );
      formData.append("files.image", image);

      const { data } = await axios.post(
        "http://localhost:1337/api/posts",
        formData,
        {
          headers,
        }
      );

      console.log(data);
      navigate(`/post/${data.data.id}`);
    } catch (err) {
      setError(
        err.request?.data?.error?.message ||
          err.response?.data?.error?.message ||
          err.message
      );
    }
  };

  return (
    <form className="NewPostForm" onSubmit={handleSubmit}>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <textarea
        value={content}
        onChange={handleContentChange}
        name="content"
        id="content"
        rows="4"
        placeholder="What are you thinking?"
        required
      ></textarea>

      <input
        onChange={handleImageChange}
        type="file"
        name="image"
        id="image"
        accept="image/*"
      />

      <div className="flex items-center justify-end gap-4">
        {isLoading && <div className="Spinner"></div>}
        <button
          type="submit"
          className="btn btn--primary"
          disabled={isDisabled}
        >
          Share
        </button>
      </div>
    </form>
  );
};

export default function NewPost() {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/login/sign-in", { replace: true });

    return () => {};
  }, [isLogged]);

  return (
    <div className="NewPost">
      <h3 className="h3">Create a new post</h3>
      <Form />
    </div>
  );
}
