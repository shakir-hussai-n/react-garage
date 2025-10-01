import Post from "./Post";
import {useContext} from "react";
import { PostListData } from "./store/PostListStore";
const PostList = () => {

 const {postList} = useContext(PostListData);

    return <>
        {postList.map((post) => (< Post key={post.id} posts={post} />))}


    </>
}

export default PostList;