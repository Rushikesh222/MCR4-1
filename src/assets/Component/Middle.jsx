import { useContext, useState } from "react";
import { forumData } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/Card-context";
import "./middle.css";

export const Middle = () => {
  const { posts } = forumData;
  const [count, setcount] = useState();

  const { handleComment } = useContext(CartContext);

  return (
    <div className="middle-container">
      {posts.map((list) => {
        const {
          postId,
          username,
          picUrl,
          post,
          postDescription,
          upvotes,
          downvotes,
          tags,
        } = list;

        return (
          <div key={postId}>
            <div className="home-arrow">
              <i
                onClick={() => {
                  setcount(() => parseInt(upvotes) + parseInt(downvotes));
                  console.log(up);
                }}
                class="far fa-triangle"
              ></i>

              <p>{count}</p>

              <i
                onClick={() => {
                  setcount(() => parseInt(upvotes) - parseInt(downvotes));
                  console.log(down);
                }}
                class="far fa-triangle fa-rotate-180"
              ></i>
            </div>
            <div className="profile-details">
              <img className="profile-image" src={picUrl} />
              <div></div>
              <p>Posted by</p>
              <h1>@{username}</h1>
            </div>

            <h2>{post}</h2>
            <div className="tag-middle">
              {tags.map((tageitems) => (
                <div>
                  <p>{tageitems}</p>
                </div>
              ))}
            </div>
            <p className="post-middle">{postDescription}</p>

            <NavLink to="/comment">
              <i
                onClick={() => handleComment(postId)}
                class="far fa-comment"
              ></i>
            </NavLink>
            <button>share</button>
            <button>bookmark</button>
          </div>
        );
      })}
    </div>
  );
};
// : "98767-888-78767",
// username: "tanaypratap",
// name: "Tanay Pratap",
// picUrl: "http://bit.ly/42Zm7tM",
// posts: [
//   {
//     postId: "36635-787-65778",
//     username: "tanaypratap",
//     name: "Tanay Pratap",
//     picUrl: "http://bit.ly/42Zm7tM",
//     post: "Join InvactHQ for MBA",
//     postDescription:
//       "Non programmers on my timeline. Attention! After placing 100+ programmers i in top Indian startups, I am thinking of coming up with a program for business roles as well. Interested in helping me build this course? Join me at Invact.",
//     upvotes: 350,
//     downvotes: 50,
//     tags: ["mba", "business", "bootcamp"],
//     createdAt: "2023-06-24T12:00:00Z",
//     comments: [
//       {
//         commentId: "89898-856-87576",
//         username: "ashwin4real",
//         picUrl: "http://bit.ly/42Zm7tM",
//         likes: 0,
//         comment: "Interested",
//         createdAt: "2023-06-24T12:01:00Z",
//       },
//     ],
//     isBookmarked: false,
