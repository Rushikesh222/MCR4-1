import { useContext, useState } from "react";

import { CartContext } from "../context/Card-context";

export const CommentPage = () => {
  const [count, setcount] = useState();
  const [commetshow, setCommentShow] = useState(false);
  const { getComment } = useContext(CartContext);
  console.log(getComment);

  return (
    <div>
      <div>
        {getComment.map((list) => {
          const {
            postId,
            username,
            picUrl,
            post,
            postDescription,
            upvotes,
            downvotes,
            tags,
            comments,
          } = list;

          return (
            <div key={postId}>
              <div>
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
              <img src={picUrl} />
              <h1>Posted by @{username}</h1>
              <h2>{post}</h2>
              <div>
                {tags.map((tageitems) => (
                  <div>
                    <p>{tageitems}</p>
                  </div>
                ))}
              </div>
              <p>{postDescription}</p>
              <div className="comment">
                {comments.map((items) => {
                  const { commentId, picUrl, username, comment } = items;
                  return (
                    <div key={commentId}>
                      <img src={picUrl} />
                      <h2>{username}</h2>
                      <p>{comment}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                <i class="far fa-comment"></i>

                <button>share</button>
                <button>bookmark</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// commentId: '89898-856-87576',
// username: 'ashwin4real',
// picUrl: 'http://bit.ly/42Zm7tM',
// likes: 0,
// comment: 'Interested',
// createdAt: '2023-06-24T12:01:00Z',
