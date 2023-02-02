import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    return(
        
            <main>
                {posts.map((post,id)=>(
                    // console.log(post.title)
                    <Article title={post.title} key={post.id} date={post.date} preview={post.preview} readTime={post.minutes} />
                ))}
            </main>
       
            
        
        
    )
    

}

export default ArticleList