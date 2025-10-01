import { MdDeleteOutline } from "react-icons/md";
import { PostListData } from "./store/PostListStore";
import {useContext} from "react";

const Post = ({posts}) => {

    const {deletePost} = useContext(PostListData)

       

    return <>
        <div className="card postCard" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{posts.title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick = {() => deletePost(posts.id)}>
                    <MdDeleteOutline />  
                    
                </span></h5>
                <p className="card-text">{posts.body}</p>
                {posts.tags.map(items => <span className="badge text-bg-primary" key = {items}>{items}</span>)}
                <div className="alert alert-success" role="alert">
                    Has been seen by {posts.reactions} Peoples
                </div>
                
            </div>
        </div>

        
    </>
}

export default Post;