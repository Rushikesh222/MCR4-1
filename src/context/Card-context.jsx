import { createContext, useState } from "react";
import { forumData } from "../Data/Data";

export const CartContext = createContext();
export const CardProvider = ({ children }) => {
  const [getComment, setgetComment] = useState([]);
  const { posts } = forumData;
  const handleComment = (id) => {
    const getCommentData = posts.filter((items) => items.postId === id);
    setgetComment(getCommentData);
  };
  return (
    <CartContext.Provider value={{ getComment, handleComment }}>
      {children}
    </CartContext.Provider>
  );
};
