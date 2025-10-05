import Post from "./Post";
import { useContext, useState, useEffect } from "react";
import { PostListData } from "./store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpin from './LoadingSpin';


const PostList = () => {
    const { postList, InitialPost } = useContext(PostListData);

    const [fetching, setFetching] = useState();

    useEffect(() => {
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
        fetch("https://dummyjson.com/posts", {signal})
            .then((res) => res.json())
            .then((data) => {
                InitialPost(data.posts);
                setFetching(false)
            });
            return () => {
                controller.abort();
            }
    }, [])





    return (
        <>
            {fetching && <LoadingSpin />}
            {!fetching && postList.length === 0 && (<WelcomeMessage />)}
            {!fetching && postList.map((i) => <Post key={i.id} postItems={i} />)}
        </>
    );
};

export default PostList;
