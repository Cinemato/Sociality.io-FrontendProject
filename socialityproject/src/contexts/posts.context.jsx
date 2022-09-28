import { createContext, useState, useEffect } from "react";
import POSTS_DATA from '../data/data.json';

export const PostsContext = createContext({
    posts: {},
    currentBrand: 3
})

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState({});
    const [currentBrand, setCurrentBrand] = useState(3);

    useEffect(() => {
        setPosts(POSTS_DATA.posts_by_date);
    },[])

    const value = {posts, currentBrand, setCurrentBrand};

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}