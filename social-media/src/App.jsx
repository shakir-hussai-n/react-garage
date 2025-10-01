import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import {useState} from "react";
import "./App.css";
import PostListProvider from "./components/store/PostListStore";

function App() {

    const [selectedTab, setSelectedTab] = useState("")
    
  

    return (
        <> 
        <PostListProvider>
            <div className="app-container">
                <SideBar  selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>
                <div className="content">
                    <Header />
                    {selectedTab === "Home" ? <PostList /> : <CreatePost /> }
                    <Footer />
                </div>
            </div>
            </PostListProvider>
        </>
    );
}

export default App;
