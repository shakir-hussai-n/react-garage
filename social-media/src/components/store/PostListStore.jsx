import {createContext,useReducer} from "react";



export const PostListData = createContext({
     postList:[],
     addPost: () => { },
     deletePost: () => { }

});

const postListReducer = (currPostList,action) => {

  switch(action.type){
    case "DELETE_ITEM":
      return  currPostList.filter(deleteItems => deleteItems.id !== action.payload) ;

    case "ADD_ITEM":
      const   addItems = [action.payload,...currPostList] 

      return addItems;

      default:
      return currPostList;
    
  }
  
  

}

const PostListProvider = ({children}) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST)
    
    
    
  const addPost = (userId, postTitle, postContent, reaction, tags) => {
      
    dispatchPostList({type : "ADD_ITEM",
      payload : {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        reactions: reaction,
        userId: userId,
        tags: tags,
      }});
  };

    const deletePost = (postId) => {
      const deleteObject = {
        type: "DELETE_ITEM",
        payload: postId
      }
      dispatchPostList(deleteObject)
      
    }


    return <PostListData.Provider value = {{postList,
        addPost,
        deletePost
    }}>
             {children}
    </PostListData.Provider>
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Munbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot, Pease out.",
    reactions:2,
    userId: "user-9",
    tags: ["vacation","Mumbai","Enjoying"]
  },
  {
    id:"2",
    title: "Pass ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain pass. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating","Unbelievable"]
  }

];

export default PostListProvider;