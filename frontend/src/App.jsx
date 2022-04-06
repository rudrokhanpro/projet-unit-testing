import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Settings from "./components/Settings";
import SignIn from "./components/SignIn";
import Home from "./Home";
import Login from "./Login";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}>
            <Route path="register" element={<Register />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
          <Route path="/" element={<Home />}>
            <Route path="/new" element={<NewPost />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
