import classes from "./Post.module.css"

const Post = (props) => {

   const post = props.post

   return (
      <div className={classes.post}>
         {post.title}
      </div>
   )
}

export default Post