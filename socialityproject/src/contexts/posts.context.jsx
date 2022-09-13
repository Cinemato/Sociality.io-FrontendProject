import { createContext, useState, useEffect } from "react";
import POSTS_DATA from '../data/data.json';

export const PostsContext = createContext({
    posts: {}
})

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        setPosts(POSTS_DATA.posts_by_date);
    },[])

    const value = {posts, setPosts};

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}