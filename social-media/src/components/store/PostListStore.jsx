import { createContext, useReducer } from "react";



export const PostListData = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
  InitialPost: () => { }

});

const postListReducer = (currPostList, action) => {


  if (action.type === "DELETE_ITEM") {

    return currPostList.filter(deleteItems => deleteItems.id !== action.payload);

  } else if (action.type === "ADD_ITEM") {

    const addItems = [action.payload, ...currPostList]

    return addItems;

  } else if (action.type === "POST_INITIAL_ITEMS") {

    return action.payload;
  } else {

    return currPostList;
  }

}


const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(postListReducer, [])


  const InitialPost = (posts) => {

    dispatchPostList({
      type: "POST_INITIAL_ITEMS",
      payload: posts 
    })

  }


  const addPost = (userId, postTitle, postContent, rct, tags) => {

    dispatchPostList({
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        rct: rct,
        userId: userId,
        tags: tags,
      }
    });
  };

  const deletePost = (postId) => {
    const deleteObject = {
      type: "DELETE_ITEM",
      payload: postId
    }
    dispatchPostList(deleteObject)

  }


  return <PostListData.Provider value={{
    postList,
    InitialPost,
    addPost,
    deletePost,

  }}>
    {children}
  </PostListData.Provider>
}



export default PostListProvider;