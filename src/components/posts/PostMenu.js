import classes from "./PostMenu.module.css"

import Post from "../posts/Post"

const PostMenu = (props) => {
   return (
      <div className={`menu ${classes.postMenu}`}>
         {props.posts.map(post => {
            return <Post key={post.id} post={post}/>
         })}
      </div>
   )
}

export default PostMenu