import classes from "./UserMenu.module.css"

import UserTab from "../users/UserTab"

const User = (props) => {

   const getUserPosts = (user) => {
      props.getPosts(user)
   }

   return (
      <div className={`menu ${classes.userMenu}`}>
         <h3>Select a user to see their posts!</h3>
         {props.users.map(user => {
            return <UserTab username={user.name} key={user.id} onClick={getUserPosts.bind(user, user.id)}/>
         })}
      </div>
   )
}

export default User