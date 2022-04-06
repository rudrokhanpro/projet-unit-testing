export default function PostCard({ content, image, username, onClick }) {
  return (
    <div className="PostCard" onClick={onClick}>
      <div className="PostCard__author">@{username}</div>
      <p className="PostCard__content">{content}</p>

      <img className="PostCard__image" src={image} />
      <div className="PostCard__likes">99 Likes</div>
    </div>
  );
}
