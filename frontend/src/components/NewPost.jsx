import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth";

const Form = () => {
  const navigate = useNavigate();
  const { jwt, user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleContentChange = ({ target: { value } }) => setContent(value);
  const handleImageChange = ({ target: { files } }) => {
    console.log(files);
    setImage(files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(content, image, jwt);

    const headers = {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "multipart/form-data",
    };

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

    navigate(`/post/${data.data.id}`);
    console.log(data);
  };

  return (
    <form className="NewPostForm" onSubmit={handleSubmit}>
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

      <div className="text-right">
        <button type="submit" className="btn btn--primary">
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
