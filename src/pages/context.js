import { createContext, useContext, useState } from "react";
import { forumData } from "./db";


const DataContext=createContext({data:''});

export const useDataContext=()=>useContext(DataContext);


const DataContextProvider=({children})=>{
const [data,setData]=useState(forumData);

const handleUpvote= (id)=>{
    const newData= data.posts.map((post)=> post.postId === id ? { ...post, upvotes: post.upvotes + 1} : post  )
    setData({...data, posts:newData})
}
const handleDownvote= (id)=>{
    const newData= data.posts.map((post)=> post.postId === id ? { ...post, upvotes: post.upvotes - 1} : post  )
    setData({...data, posts:newData})
}
const handleBookmark=(id)=>{
    const newData= data.posts.map((post)=> post.postId === id ? { ...post, isBookmarked: !post.isBookmarked } : post  )
    setData({...data, posts:newData})
}

const handleSort = (e) => {
    const sortedData = [...data.posts];
  
    if (e.target.value === 'latest') {
      sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (e.target.value === 'mostVotes') {
      sortedData.sort((a, b) => b.upvotes - a.upvotes);
    }
  
    setData({ ...data, posts: sortedData });
  };

  
return(
        <DataContext.Provider value={{data,setData, handleUpvote, handleDownvote,handleBookmark,handleSort}} >
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;