import {useRef,useContext} from "react";
import { PostListData } from "./store/PostListStore";


const CreatePost = () => {

const{addPost} = useContext(PostListData)

const userIdElement = useRef();
const postTitleElement = useRef();
const postContentElement = useRef();
const reactionElement = useRef();
const tagsElement = useRef();



const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

addPost(userId,postTitle,postContent,reaction,tags);

    userIdElement.current.value =""
    postTitleElement.current.value = ""
    postContentElement.current.value = ""
    reactionElement.current.value = ""
    tagsElement.current.value = ""


}


    return <>
        <form className = "formContainer"  onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your User Id here:</label>
                <input type="text" className="form-control" id="userId" aria-describedby="emailHelp" ref={userIdElement}/>        
            </div>
            <div className="mb-3">
                <label htmlFor="postTitle" className="form-label">Post Title</label>
                <input type="text" className="form-control" id="postTitle" aria-describedby="emailHelp" ref={postTitleElement} />
            </div>
            <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Post Content</label>
                <input type="text" className="form-control" id="postContent" aria-describedby="emailHelp" ref={postContentElement} />
            </div>
            <div className="mb-3">
                <label htmlFor="reaction" className="form-label"> Reaction</label>
                <input type="text" className="form-control" id="reaction" aria-describedby="emailHelp" ref={reactionElement} />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input type="text" className="form-control" id="tags" aria-describedby="emailHelp" ref={tagsElement} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>


}


export default CreatePost;